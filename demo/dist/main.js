(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/src/$$_lazy_route_resource lazy recursive":
/*!***************************************************************!*\
  !*** ./demo/src/$$_lazy_route_resource lazy namespace object ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./demo/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/src/app/app.component.css":
/*!****************************************!*\
  !*** ./demo/src/app/app.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav_upper{\r\n    height: 4em;\r\n}\r\n\r\n#menu{\r\n    padding-left:0px;\r\n}\r\n\r\n.side{\r\n    height: 50vh;\r\n}\r\n\r\n.dropdown-menu{\r\n    width: 100%;\r\n}\r\n\r\n.all{\r\n    height: 100vh;\r\n}"

/***/ }),

/***/ "./demo/src/app/app.component.html":
/*!*****************************************!*\
  !*** ./demo/src/app/app.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n    \r\n    <mdb-navbar SideClass=\"navbar navbar-dark indigo\">\r\n      <mdb-navbar-brand><a class=\"navbar-brand\" routerLink=\"blank\">Navbar</a></mdb-navbar-brand>\r\n      <mdb-navbar-brand><a class=\"navbar-brand\" routerLink=\"expenses\">Twoje wydatki</a></mdb-navbar-brand>\r\n      <mdb-navbar-brand><a class=\"navbar-brand\" routerLink=\"savings\">Oszczędności</a></mdb-navbar-brand>\r\n      <mdb-navbar-brand><a class=\"navbar-brand\" routerLink=\"income\">Przychód</a></mdb-navbar-brand>\r\n      <mdb-navbar-brand><a class=\"navbar-brand\" routerLink=\"history\">Historia</a></mdb-navbar-brand>\r\n     \r\n  </mdb-navbar>\r\n  \r\n  \r\n\r\n<div class=\"row\">\r\n  <div class=\"col-2 indigo\">\r\n    <div class=\"side\">\r\n        <div class=\"dropdown\" mdbDropdown>\r\n            <button mdbDropdownToggle type=\"button\" mdbBtn color=\"primary\" class=\"w-100 dropdown-toggle waves-light\" mdbWavesEffect>\r\n                Overwiew account\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-primary w-100\">\r\n              <span class=\"dropdown-item\">lalala</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"side\">\r\n        <div class=\"dropdown\" mdbDropdown>\r\n            <button mdbDropdownToggle type=\"button\" mdbBtn color=\"primary\" class=\"w-100 dropdown-toggle waves-light\" mdbWavesEffect>\r\n              Savings\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-primary w-100\">\r\n              <span class=\"dropdown-item\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-10 all\">\r\n    <router-outlet></router-outlet>\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./demo/src/app/app.component.ts":
/*!***************************************!*\
  !*** ./demo/src/app/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./demo/src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./demo/src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./demo/src/app/app.module.ts":
/*!************************************!*\
  !*** ./demo/src/app/app.module.ts ***!
  \************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./demo/src/app/app.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expenses/expenses.component */ "./demo/src/app/expenses/expenses.component.ts");
/* harmony import */ var _savings_savings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./savings/savings.component */ "./demo/src/app/savings/savings.component.ts");
/* harmony import */ var _income_income_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./income/income.component */ "./demo/src/app/income/income.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./history/history.component */ "./demo/src/app/history/history.component.ts");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blank/blank.component */ "./demo/src/app/blank/blank.component.ts");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm5/angular-progress-bar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'expenses', component: _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_5__["ExpensesComponent"] },
    { path: 'income', component: _income_income_component__WEBPACK_IMPORTED_MODULE_7__["IncomeComponent"] },
    { path: 'savings', component: _savings_savings_component__WEBPACK_IMPORTED_MODULE_6__["SavingsComponent"] },
    { path: 'history', component: _history_history_component__WEBPACK_IMPORTED_MODULE_9__["HistoryComponent"] },
    { path: '**', component: _blank_blank_component__WEBPACK_IMPORTED_MODULE_10__["BlankComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_5__["ExpensesComponent"],
                _savings_savings_component__WEBPACK_IMPORTED_MODULE_6__["SavingsComponent"],
                _income_income_component__WEBPACK_IMPORTED_MODULE_7__["IncomeComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_9__["HistoryComponent"],
                _blank_blank_component__WEBPACK_IMPORTED_MODULE_10__["BlankComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes),
                angular_progress_bar__WEBPACK_IMPORTED_MODULE_11__["ProgressBarModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./demo/src/app/blank/blank.component.html":
/*!*************************************************!*\
  !*** ./demo/src/app/blank/blank.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blank works!\n</p>\n"

/***/ }),

/***/ "./demo/src/app/blank/blank.component.scss":
/*!*************************************************!*\
  !*** ./demo/src/app/blank/blank.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./demo/src/app/blank/blank.component.ts":
/*!***********************************************!*\
  !*** ./demo/src/app/blank/blank.component.ts ***!
  \***********************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./demo/src/app/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.scss */ "./demo/src/app/blank/blank.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./demo/src/app/expenses/expenses.component.html":
/*!*******************************************************!*\
  !*** ./demo/src/app/expenses/expenses.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row h-50 mt-2\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-8\" id=\"fixed-expenses\">\n        <div class=\"unique-color\">\n          Fixed Expenses\n        </div>\n        <div class=\"border border-indigo\">\n          <div>\n              <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>What</th>\n                      <th>Where</th>\n                      <th>Final date</th>\n                      <th>How much</th>\n                      <th *ngIf=\"toggleEdit==true\">Paid</th>\n                      <th *ngIf=\"toggleEdit==true\">\n                          <button type=\"button\" class=\"close\" aria-label=\"Close\" >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                      </th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <th scope=\"row\">1</th>\n                      <td>Mark</td>\n                      <td>Otto</td>\n                      <td>@mdo</td>\n                      <td>Otto</td>\n                      \n                      <td *ngIf=\"toggleEdit==true\">mdo</td>\n                      <td *ngIf=\"toggleEdit==true\">\n                          <button type=\"button\" class=\"close\" aria-label=\"Close\"data-toggle=\"modal\" data-target=\"#basicExample\" (click)=\"closeFixed.show()\">\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                      </td>\n                    </tr>\n                   \n                  </tbody>\n                </table>\n                <div mdbModal #closeFixed=\"mdbModal\" class=\"modal fade top\" id=\"frModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n                <div class=\"modal-dialog modal-sm modal-notify modal-danger\" role=\"document\">\n                    <!--Content-->\n                    <div class=\"modal-content text-center\">\n                      <!--Header-->\n                      <div class=\"modal-header d-flex justify-content-center\">\n                        <p class=\"heading\">Are you sure?</p>\n                      </div>\n                \n                      <!--Body-->\n                      <div class=\"modal-body\">\n                        <i class=\"fa fa-times fa-4x animated rotateIn\"></i>\n                      </div>\n                \n                      <!--Footer-->\n                      <div class=\"modal-footer flex-center\">\n                        <a href=\"https://mdbootstrap.com/product/angular-bootstrap-pro/\" mdbBtn color=\"danger\" outline=\"true\" class=\"waves-effect\"\n                          mdbWavesEffect>Yes</a>\n                        <a type=\"button\" mdbBtn color=\"danger\" class=\"waves-effect\" mdbWavesEffect data-dismiss=\"modal\" (click)=\"frame.hide()\">No</a>\n                      </div>\n                    </div>\n                    <!--/.Content-->\n                  </div>\n                </div>\n\n          </div>\n\n        </div>\n        \n    </div>\n    <div class=\"col-1\"></div>\n    <div class=\"col-2\">\n        <button class=\"btn indigo darken-3 w-100 float-right\" (click)=\"toggleEdit==false? toggleEdit=true:toggleEdit=false\">Zarządzaj</button>\n        <button class=\"btn indigo darken-3 mt-2 w-100 float-right\" data-toggle=\"modal\" data-target=\"#frameModalTop1\" (click)=\"frame.show()\">Dodaj</button>\n          <!-- modal tu jest-->\n          <div mdbModal #frame=\"mdbModal\" class=\"modal fade right\" id=\"frameModalTop1\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n           <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                  <div class=\"modal-header text-center\">\n                    <h4 class=\"modal-title w-100 font-weight-bold\">Dodaj wydatek stały</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"frame.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                      <form [formGroup]=\"validatingFormFixed\">\n                          <div class=\"md-form\">\n                              <input mdbInputDirective type=\"text\"  class=\"form-control\" data-error=\"It is required\" data-success=\"Everything is okay!\" formControlName=\"expenseFixedName\">\n                              <label >Name</label>\n                          </div>\n                          <div class=\"md-form\">\n                              <input mdbInputDirective type=\"number\"  class=\"form-control\" data-error=\"It is required\" data-success=\"Everything is okay!\" formControlName=\"expenseFixedAmount\">\n                              <label >Amount</label>\n                          </div>\n                          <div>\n                            <label>Choose your due date</label>\n                             \n                          </div>\n                          <div>\n                            <span>How often is this expense?</span>\n\n                          </div>\n                      </form>\n                  </div>\n                  <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-primary indigo lighten\" mdbWavesEffect>Send Expense</button>\n                  </div>\n              </div>\n          </div>\n        </div>\n        <button class=\"btn indigo darken-3 mt-2 w-100 float-right\" (click)=\"toggleSearch==false?toggleSearch=true:toggleSearch=false; searchMinMax=false;searchText=false\" >Szukaj</button>\n        <div  *ngIf=\"toggleSearch==true\">\n             <button class=\"indigo lighten-3 align-baseline\">Pokaż niezapłacone</button>\n             <button class=\"indigo lighten-3 align-baseline\" (click)=\"searchMinMax==false? searchMinMax=true: searchMinMax=false\" >Szukaj w przedziale</button>\n             <div *ngIf=\"searchMinMax==true\"class=\"md-form\">\n                <input type=\"number\" class=\"form-control\" id=\"numbermin\" mdbInputDirective>\n                 <label for=\"numbermin\">Number min</label>\n                 <input type=\"number\" class=\"form-control\" id=\"numbermax\" mdbInputDirective>\n                 <label for=\"numbermax\">Number max</label>\n                 <button class=\"indigo darken-3\">Accept</button>\n              </div>\n              <button class=\"indigo lighten-3 align-baseline\" (click)=\"searchText==false?searchText=true:searchText=false\">Szukaj po słowie klucz</button>\n              <div *ngIf=\"searchText==true\">\n                  <div class=\"md-form form-sm\">\n                      <input type=\"text\" id=\"form11\" class=\"form-control\" >\n                      <label for=\"form11\" class=\"disabled\">Example label</label>\n                    </div>\n                  <button class=\"indigo darken-3\">Accept</button>\n              </div>\n        </div>\n    </div>\n  </div>\n  \n<div class=\"row h-50 mt-2\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-8\">\n      <div class=\"unique-color\" >\n        Changeable Expenses\n      </div>\n      <div class=\"border border-indigo\" >\n       \n        <table class=\"table\">\n          <thead>\n           <tr>\n            <th>#</th>\n            <th>What</th>\n            \n            <th>Category</th>\n            <th>How much</th>\n            <th>Was it necessary?</th>\n            <th *ngIf=\"toggleEditCh==true\">\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </th>\n           </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <th scope=\"row\" *ngFor=\"let change of expensesChangeable, let i = index\">{{i+1}}</th>\n              <td>{{change.name}}</td>\n             \n              <td>{{change.category}}</td>\n              <td>{{change.amount}}</td>\n              <td>{{change.necessary}}</td>\n              <td *ngIf=\"toggleEditCh==true\">\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"modal\" data-target=\"#basicExample\" (click)=\"closeCh.show()\">\n                   <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </td>\n            </tr>\n                     \n           </tbody>\n          </table>  \n          <div mdbModal #closeCh=\"mdbModal\" class=\"modal fade top\" id=\"frModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm modal-notify modal-danger\" role=\"document\">\n    <!--Content-->\n    <div class=\"modal-content text-center\">\n      <!--Header-->\n      <div class=\"modal-header d-flex justify-content-center\">\n        <p class=\"heading\">Are you sure?</p>\n      </div>\n\n      <!--Body-->\n      <div class=\"modal-body\">\n        <i class=\"fa fa-times fa-4x animated rotateIn\"></i>\n      </div>\n\n      <!--Footer-->\n      <div class=\"modal-footer flex-center\">\n        <a href=\"https://mdbootstrap.com/product/angular-bootstrap-pro/\" mdbBtn color=\"danger\" outline=\"true\" class=\"waves-effect\"\n          mdbWavesEffect>Yes</a>\n        <a type=\"button\" mdbBtn color=\"danger\" class=\"waves-effect\" mdbWavesEffect data-dismiss=\"modal\" (click)=\"frame.hide()\">No</a>\n      </div>\n    </div>\n    <!--/.Content-->\n  </div>\n</div>    \n        </div> \n    </div>\n    <div class=\"col-1\"></div>\n    <div class=\"col-2\">\n        <button class=\"btn indigo darken-3 w-100 float-right\" (click)=\"toggleEditCh==false? toggleEditCh=true:toggleEditCh=false\">Zarządzaj</button>\n        <button class=\"btn indigo darken-3 mt-2 w-100 float-right\" data-toggle=\"modal\" data-target=\"#frameModalTop2\" (click)=\"fr.show()\">Dodaj</button>\n          <!-- modal tu jest-->\n        <div mdbModal #fr=\"mdbModal\" class=\"modal fade right\" id=\"frameModalTop2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header text-center\">\n                <h4 class=\"modal-title w-100 font-weight-bold\">Dodaj wydatek zmienny</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"frame.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                  <form [formGroup]=\"validatingForm\">\n                      <div class=\"md-form\">\n                          <input mdbInputDirective type=\"text\" #expensechname id=\"formName\" class=\"form-control\" data-error=\"It is required\" data-success=\"Everything is okay!\" formControlName=\"expenseName\">\n                          <label for=\"formName\">Name</label>\n                      </div>\n                      <div class=\"md-form\">\n                          <input mdbInputDirective type=\"number\" [(ngModel)]=\"amountch\" [ngModelOptions]=\"{standalone: true}\" id=\"formAmount\" class=\"form-control\" data-error=\"It is required\" data-success=\"Everything is okay!\" formControlName=\"expenseAmount\">\n                          <label for=\"formAmount\">Amount</label>\n                      </div>\n                      <div>\n                        <select #catName>\n                          <option *ngFor=\"let cat of categories\">{{cat}}</option>\n                        </select>\n                         </div>\n\n                        <div>Was it necessary?\n                          <input type=\"checkbox\" [(ngModel)]=\"wasNecessary\" [ngModelOptions]=\"{standalone: true}\"><span *ngIf=\"wasNecessary==true\">Yes</span><span *ngIf=\"wasNecessary==false\">No</span>\n                        </div>\n                  </form>\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-primary indigo lighten\" (click)=\"addExpense(expensechname.value,catName.value);fr.hide()\" mdbWavesEffect>Send Expense</button>\n              </div>\n          </div>\n            </div>\n          </div>\n        </div>\n        \n        <button class=\"btn indigo darken-3 mt-2 w-100 float-right\" (click)=\"toggleSearchCh==false?toggleSearchCh=true:toggleSearchCh=false; searchMinMaxCh=false;searchTextCh=false\" >Szukaj</button>\n        <div  *ngIf=\"toggleSearchCh==true\">\n             <button class=\"indigo lighten-3 align-baseline\">Pokaż niepotrzebne</button>\n             <button class=\"indigo lighten-3 align-baseline\" (click)=\"searchMinMaxCh==false? searchMinMaxCh=true: searchMinMaxCh=false\" >Szukaj w przedziale</button>\n             <div *ngIf=\"searchMinMaxCh==true\"class=\"md-form\">\n                <input type=\"number\" class=\"form-control\" id=\"numbermin\" mdbInputDirective>\n                 <label for=\"numbermin\">Number min</label>\n                 <input type=\"number\" class=\"form-control\" id=\"numbermax\" mdbInputDirective>\n                 <label for=\"numbermax\">Number max</label>\n                 <button class=\"indigo darken-3\">Accept</button>\n              </div>\n              <button class=\"indigo lighten-3 align-baseline\" (click)=\"searchTextCh==false?searchTextCh=true:searchTextCh=false\">Szukaj po słowie klucz</button>\n              <div *ngIf=\"searchTextCh==true\">\n                  <div class=\"md-form form-sm\">\n                      <input type=\"text\" id=\"form11\" class=\"form-control\" >\n                      <label for=\"form11\" class=\"disabled\">Example label</label>\n                    </div>\n                  <button class=\"indigo darken-3\">Accept</button>\n              </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./demo/src/app/expenses/expenses.component.scss":
/*!*******************************************************!*\
  !*** ./demo/src/app/expenses/expenses.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./demo/src/app/expenses/expenses.component.ts":
/*!*****************************************************!*\
  !*** ./demo/src/app/expenses/expenses.component.ts ***!
  \*****************************************************/
/*! exports provided: ExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesComponent", function() { return ExpensesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./demo/src/app/services/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExpensesComponent = /** @class */ (function () {
    function ExpensesComponent(fb, _service) {
        this.fb = fb;
        this._service = _service;
        this.categories = this._service.categories;
        this.toggleEdit = false;
        this.toggleEditCh = false;
        this.wasNecessary = false;
        this.expensesChangeable = this._service.expensesChangeable;
        this.validatingForm = fb.group({
            'expenseName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'expenseAmount': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.validatingFormFixed = fb.group({
            'expenseFixedName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'expenseFixedAmount': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ExpensesComponent.prototype.ngOnInit = function () {
    };
    ExpensesComponent.prototype.addExpense = function (a, b) {
        this._service.addChangeableExpense(a, b, this.amountch, this.wasNecessary);
    };
    ExpensesComponent.prototype.deleteExpense = function (a) {
        this._service.deleteChangeableExpense(a);
    };
    ExpensesComponent.prototype.addFixedExpense = function (a, b, c) {
        this._service.addFixedExpense(a, b, c);
    };
    ExpensesComponent.prototype.deleteFixedExpense = function (a) {
        this._service.deleteFixedExpense(a);
    };
    ExpensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expenses',
            template: __webpack_require__(/*! ./expenses.component.html */ "./demo/src/app/expenses/expenses.component.html"),
            styles: [__webpack_require__(/*! ./expenses.component.scss */ "./demo/src/app/expenses/expenses.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], ExpensesComponent);
    return ExpensesComponent;
}());



/***/ }),

/***/ "./demo/src/app/history/history.component.html":
/*!*****************************************************!*\
  !*** ./demo/src/app/history/history.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  history works!\n</p>\n"

/***/ }),

/***/ "./demo/src/app/history/history.component.scss":
/*!*****************************************************!*\
  !*** ./demo/src/app/history/history.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./demo/src/app/history/history.component.ts":
/*!***************************************************!*\
  !*** ./demo/src/app/history/history.component.ts ***!
  \***************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./demo/src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./demo/src/app/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./demo/src/app/income/income.component.html":
/*!***************************************************!*\
  !*** ./demo/src/app/income/income.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-1\">\n\n  </div>\n  <div class=\"col-8 mt-3 border border-indigo\">\n    Masz w sumie: {{totalIncome}}\n    <div *ngIf=\"toggleAddSaving==true\">\n      <label>Ile przeznaczyć na oszczędności:</label>\n      <input type=\"number\" [(ngModel)]=\"saveAmount\">\n      <button mdbBtn type=\"button\" color=\"indigo\" class=\"waves-light float-right\" (click)=\"addToSavings();toggleAddSaving=false\"  mdbWavesEffect>Przeznacz</button>\n      \n    </div>\n    <table>\n      <thead class=\"indigo\">\n        <tr>\n          <th>#</th>\n          <th>What</th>\n          <th>Amount</th>\n          <th>Date</th>\n          <th *ngIf=\"toggleEditI==true\">\n            <button type=\"button\" class=\"close\" aria-label=\"Close\">\n             <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let income of incomes; let i = index \">\n          <td>{{i+1}}</td>\n          <td>{{income.name}}</td>\n          <td>{{income.Amount}}</td>\n          <td>{{income.date.toString().slice(4,15)}}</td>\n          <td *ngIf=\"toggleEditI==true\">\n             <button type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"modal\" data-target=\"#basicExample\" (click)=\"fr.show(income.id)\">\n               <span aria-hidden=\"true\">&times;</span>\n             </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    \n\n<div mdbModal #fr=\"mdbModal\" class=\"modal fade top\" id=\"frModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm modal-notify modal-danger\" role=\"document\">\n    <!--Content-->\n    <div class=\"modal-content text-center\">\n      <!--Header-->\n      <div class=\"modal-header d-flex justify-content-center\">\n        <p class=\"heading\">Are you sure?</p>\n      </div>\n\n      <!--Body-->\n      <div class=\"modal-body\">\n        <i class=\"fa fa-times fa-4x animated rotateIn\"></i>\n      </div>\n\n      <!--Footer-->\n      <div class=\"modal-footer flex-center\">\n        <a  mdbBtn color=\"danger\" outline=\"true\" class=\"waves-effect\"(click)=\"fr.hide();deleteIncome(1)\" mdbWavesEffect>Yes</a>\n        <a type=\"button\" mdbBtn color=\"danger\" class=\"waves-effect\" mdbWavesEffect data-dismiss=\"modal\" (click)=\"fr.hide()\">No</a>\n      </div>\n    </div>\n    <!--/.Content-->\n  </div>\n</div>\n  </div>\n  <div class=\"col-1\"></div>\n  <div class=\"col-2 mt-3\">\n      <button mdbBtn type=\"button\" color=\"indigo\" class=\"waves-light float-right\" data-toggle=\"modal\" data-target=\"#frameModalTop2\" (click)=\"frame.show()\" mdbWavesEffect>Dodaj przychód</button>\n      <div mdbModal #frame=\"mdbModal\" class=\"modal fade right\" id=\"frameModalTop2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header text-center\">\n                <h4 class=\"modal-title w-100 font-weight-bold\">Dodaj przychód</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"frame.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                  <form [formGroup]=\"validatingForm\">\n                      <div class=\"md-form\">\n                          <input mdbInputDirective #incomeName type=\"text\" id=\"formName\" class=\"form-control\" data-error=\"It is required\" data-success=\"Everything is okay!\" formControlName=\"incomeName\">\n                          <label for=\"formName\">Income</label>\n                      </div>\n                      <div class=\"md-form\">\n                          <input mdbInputDirective #incomeNumber type=\"number\" id=\"formAmount\" class=\"form-control\" data-error=\"It is required\" data-success=\"Everything is okay!\" formControlName=\"incomeAmount\">\n                          <label for=\"formAmount\">Amount</label>\n                      </div>\n                      <div>\n                        <label>Choose your due date</label>\n                         </div>\n                  </form>\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-primary indigo lighten\"  (click)=\"frame.hide();sendIncome(incomeName.value, incomeNumber.value);\"mdbWavesEffect>Send Income</button>\n              </div>\n          </div>\n        </div>\n      </div>\n      <button mdbBtn type=\"button\" color=\"indigo\" class=\"waves-light float-right\" (click)=\"toggleEditI==false?toggleEditI=true:toggleEditI=false\"  mdbWavesEffect>Zarządzaj</button>\n      <button mdbBtn type=\"button\" color=\"indigo\" class=\"waves-light float-right\" (click)=\"toggleAddSaving==false?toggleAddSaving=true:toggleAddSaving=false\"  mdbWavesEffect>Zaoszczędź</button>\n      \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./demo/src/app/income/income.component.scss":
/*!***************************************************!*\
  !*** ./demo/src/app/income/income.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./demo/src/app/income/income.component.ts":
/*!*************************************************!*\
  !*** ./demo/src/app/income/income.component.ts ***!
  \*************************************************/
/*! exports provided: IncomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeComponent", function() { return IncomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./demo/src/app/services/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IncomeComponent = /** @class */ (function () {
    function IncomeComponent(fb, _service) {
        this.fb = fb;
        this._service = _service;
        this.toggleEditI = false;
        this.incomes = this._service.incomes;
        this.incomeValue = this._service.totalIncomeValue;
        this.validatingForm = fb.group({
            'incomeName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'incomeAmount': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    IncomeComponent.prototype.ngOnInit = function () {
    };
    IncomeComponent.prototype.sendIncome = function (a, b, c) {
        if (c === void 0) { c = this._service.incomes.length; }
        this._service.sendIncome(a, b, c);
        this.validatingForm.reset();
    };
    IncomeComponent.prototype.deleteIncome = function (a) {
        this._service.deleteIncome(a);
    };
    IncomeComponent.prototype.addToSavings = function () {
        this._service.addPaymentToSavings(this.saveAmount);
    };
    IncomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-income',
            template: __webpack_require__(/*! ./income.component.html */ "./demo/src/app/income/income.component.html"),
            styles: [__webpack_require__(/*! ./income.component.scss */ "./demo/src/app/income/income.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], IncomeComponent);
    return IncomeComponent;
}());



/***/ }),

/***/ "./demo/src/app/savings/savings.component.html":
/*!*****************************************************!*\
  !*** ./demo/src/app/savings/savings.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-8\">\n    <div><label>Oszczędności w sumie:</label><span>{{totalsavings}}</span>\n      <label>Oszczędności niezagospodarowane na cel:</label><span></span>\n      <label>Oszczędności na cele:</label><span></span>\n    </div>\n    <div class=\"unique-color mt-3\">Savings</div>\n    <div class=\"border border-indigo\" >\n       \n        <table class=\"table\">\n          <thead>\n           <tr>\n            <th>#</th>\n            <th>Cel</th>\n            <th>Progress bar</th>\n            <th *ngIf=\"toggleEditS==true\">Wpłać</th>\n            <th *ngIf=\"toggleEditS==true\">\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </th>\n           </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let save of savings; let i = index\">\n              \n              <td>{{i+1}}</td>\n              <td>{{save.name}}</td>\n              <td *ngIf=\"save.fullfield.iffullfield==false\">\n                  <progress-bar [progress]=\"(save.achieved)*100/(save.fullamount)\" [color-degaded]=\"{'0':'#663300', '40':'#666600', '70':'#669933','90':'#66cc33', '95':'#66ff33'}\">\n                    </progress-bar>\n                {{save.achieved}} / {{save.fullamount}}\n              </td> \n               <td *ngIf=\"save.fullfield.iffullfield!==false\">\n                Wpłacono {{save.fullamount}}! Ostatnia wpłata {{save.fullfield.date.toString().slice(8,18)}}\n              </td>\n              <td *ngIf=\"toggleEditS==true\"><button (click)=\"save[i]==false?save[i]=true:save[i]=false\" class=\"indigo lighten\">Wpłać</button></td>\n              <td *ngIf=\"toggleEditS==true\">\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" data-toggle=\"modal\" data-target=\"#basicExample\" (click)=\"fr.show()\">\n                   <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </td>\n              <div class=\"card indigo lighten-3\" *ngIf=\"save[i]==true\">\n                 <div class=\"card-body\">\n                    <h4 class=\"card-title\"><a>Pay</a></h4>\n                   <!-- Text -->\n                  \n                   <div>\n                      <input mdbInputDirective type=\"number\" [(ngModel)]=\"amount\" id=\"formAmount\" >\n                      <label for=\"formAmount\">Amount</label>\n                  </div>\n                \n                   <button class=\"btn btn-primary\" (click)=\"add(i);save[i]=false\">Add</button>\n\n                  </div>\n                \n                </div>\n            </tr>\n                     \n           </tbody>\n          </table> \n          <div mdbModal #fr=\"mdbModal\" class=\"modal fade top\" id=\"frModalTop\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm modal-notify modal-danger\" role=\"document\">\n    <!--Content-->\n    <div class=\"modal-content text-center\">\n      <!--Header-->\n      <div class=\"modal-header d-flex justify-content-center\">\n        <p class=\"heading\">Are you sure?</p>\n      </div>\n\n      <!--Body-->\n      <div class=\"modal-body\">\n        <i class=\"fa fa-times fa-4x animated rotateIn\"></i>\n      </div>\n\n      <!--Footer-->\n      <div class=\"modal-footer flex-center\">\n        <a  mdbBtn color=\"danger\" outline=\"true\" class=\"waves-effect\" mdbWavesEffect (click)=\"deleteSaving(i); fr.hide()\">Yes</a>\n        <a type=\"button\" mdbBtn color=\"danger\" class=\"waves-effect\" mdbWavesEffect data-dismiss=\"modal\" (click)=\"fr.hide()\">No</a>\n      </div>\n    </div>\n    <!--/.Content-->\n  </div>\n</div>     \n        </div> \n  </div>\n  <div class=\"col-1\"></div>\n  <div class=\"col-2 mt-3\">\n    <div id=\"panel_zarzadzania\">\n        <button mdbBtn type=\"button\" color=\"indigo\" class=\"waves-light float-right\" (click)=\"toggleEditS==false?toggleEditS=true:toggleEditS=false\" mdbWavesEffect>Zarządzaj</button>\n      <button mdbBtn type=\"button\" color=\"indigo\" class=\"waves-light float-right\" data-toggle=\"modal\" (click)=\"addGoal.show()\" mdbWavesEffect>Dodaj cel!</button>\n      <button mdbBtn type=\"button\" color=\"indigo\" class=\"waves-light float-right\" (click)=\"toggleSearch==false?toggleSearch=true:toggleSearch=false\" mdbWavesEffect>Szukaj</button>\n      <div mdbModal #addGoal=\"mdbModal\" class=\"modal fade right\" id=\"frameModalTop2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel2\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header text-center\">\n                <h4 class=\"modal-title w-100 font-weight-bold\">Dodaj cel</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"addGoal.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                  <form [formGroup]=\"validatingForm\">\n                      <div class=\"md-form\">\n                          <input mdbInputDirective type=\"text\" #savingName id=\"formName\" class=\"form-control\" data-error=\"It is required\" data-success=\"Everything is okay!\" formControlName=\"savingName\">\n                          <label for=\"formName\">Cel</label>\n                      </div>\n                      <div class=\"md-form\">\n                          <input mdbInputDirective type=\"number\" #savingAmount id=\"formAmount\" class=\"form-control\" data-error=\"It is required\" data-success=\"Everything is okay!\" formControlName=\"savingAmount\">\n                          <label for=\"formAmount\">Amount</label>\n                      </div>\n                      \n                  </form>\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-primary indigo lighten\" (click)=\"sendSaving(savingName.value,savingAmount.value);addGoal.hide()\"mdbWavesEffect>Add Goal</button>\n              </div>\n          </div>\n        </div>\n      </div>\n        <div  class=\"border-indigo\" *ngIf=\"toggleSearch==true\">\n          <span>Szukaj po wyrazie</span>\n          <div class=\"md-form\">\n            <input mdbInputDirective type=\"text\" id=\"searchSavings\" class=\"form-control\">\n            <label for=\"searchSavings\" class=\"\">Search...</label>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./demo/src/app/savings/savings.component.scss":
/*!*****************************************************!*\
  !*** ./demo/src/app/savings/savings.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./demo/src/app/savings/savings.component.ts":
/*!***************************************************!*\
  !*** ./demo/src/app/savings/savings.component.ts ***!
  \***************************************************/
/*! exports provided: SavingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsComponent", function() { return SavingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./demo/src/app/services/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SavingsComponent = /** @class */ (function () {
    function SavingsComponent(fb, _service) {
        this.fb = fb;
        this._service = _service;
        this.toggleEditS = false;
        this.goalsavings = this._service.goalsavings;
        this.totalsavings = this._service.amountToSave;
        this.nongoalsavings = this._service.nongoalsavings;
        this.savings = this._service.savings;
        this.amount = 0;
        this.validatingForm = fb.group({
            'savingName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'savingAmount': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    SavingsComponent.prototype.ngOnInit = function () {
    };
    SavingsComponent.prototype.deleteSaving = function (a) {
        this._service.deleteSaving(a);
    };
    SavingsComponent.prototype.sendSaving = function (a, b, c) {
        if (c === void 0) { c = this._service.savings.length; }
        this._service.sendSaving(a, b, c);
        this.validatingForm.reset();
    };
    SavingsComponent.prototype.add = function (b) {
        this._service.addPaymentToGoal(this.amount, b);
        this.amount = null;
    };
    SavingsComponent.prototype.countSavings = function () {
        this._service.countSavings();
    };
    SavingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-savings',
            template: __webpack_require__(/*! ./savings.component.html */ "./demo/src/app/savings/savings.component.html"),
            styles: [__webpack_require__(/*! ./savings.component.scss */ "./demo/src/app/savings/savings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], SavingsComponent);
    return SavingsComponent;
}());



/***/ }),

/***/ "./demo/src/app/services/main.service.ts":
/*!***********************************************!*\
  !*** ./demo/src/app/services/main.service.ts ***!
  \***********************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainService = /** @class */ (function () {
    function MainService() {
        this.tabaluga = 'aaaaa';
        this.categories = ['jedzonko', 'ubrania', 'elektronika'];
        this.expensesChangeable = new Array();
        this.savings = new Array();
        this.incomes = new Array();
        this.amountToSave = this.totalSavings();
        this.totalIncomeValue = this.totalIncome() - this.amountToSave;
        this.addedToSavings = new Array();
        this.goalsavings = this.countSavings()[0];
        this.nongoalsavings = this.countSavings()[1];
        console.log('aaa' + this.tabaluga);
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA');
    }
    MainService.prototype.totalIncome = function () {
        this.totalIncomeValue = 0;
        for (var i = 0; i < this.incomes.length; i++) {
            this.totalIncomeValue = this.totalIncomeValue + this.incomes[i].amount;
        }
        return this.totalIncomeValue;
    };
    MainService.prototype.totalSavings = function () {
        this.amountToSave = 0;
        console.log('bbb' + this.tabaluga);
        for (var i = 0; i < this.addedToSavings.length; i++) {
            this.amountToSave += this.addedToSavings[i].amount;
        }
        return this.amountToSave;
    };
    MainService.prototype.sendIncome = function (a, b, c) {
        this.incomes.push({ id: c, name: a, amount: b, date: new Date() });
    };
    MainService.prototype.deleteIncome = function (a) {
        this.incomes.slice(a - 1, 1);
    };
    MainService.prototype.addPaymentToSavings = function (a) {
        //this.addedToSavings.push({amount:a,date: new Date()});
        this.totalIncomeValue -= this.amountToSave;
    };
    MainService.prototype.deleteSaving = function (a) {
        this.savings.slice(a - 1, 1);
    };
    MainService.prototype.sendSaving = function (a, b, c) {
        this.savings.push({ id: c, name: a, fullamount: b, paid: [], fullfield: { iffullfield: false, date: new Date() }, achieved: 0 });
    };
    MainService.prototype.addPaymentToGoal = function (a, b) {
        this.savings[b].paid.push({ amount: a, date: new Date() });
        this.amountAchieved(b);
    };
    MainService.prototype.amountAchieved = function (b) {
        this.savings[b].achieved = 0;
        for (var i = 0; i < this.savings[b].paid.length; i++) {
            this.savings[b].achieved = this.savings[b].achieved + this.savings[b].paid[i].amount;
            if (this.savings[b].achieved >= this.savings[b].fullamount) {
                this.savings[b].fullfield.iffullfield = true;
                this.savings[b].fullfield.date = new Date();
            }
        }
    };
    MainService.prototype.countSavings = function () {
        for (var i = 0; i < this.savings.length; i++) {
            this.goalsavings += this.savings[i].achieved;
        }
        this.nongoalsavings = this.amountToSave - this.goalsavings;
        return [this.goalsavings, this.nongoalsavings];
    };
    MainService.prototype.addChangeableExpense = function (a, b, c, d) {
        this.expensesChangeable.push({ id: this.expensesChangeable.length, name: a, category: b, amount: c, necessary: d, date: new Date() });
    };
    MainService.prototype.deleteChangeableExpense = function (a) {
        this.expensesChangeable.splice(a - 1, 1);
    };
    MainService.prototype.addFixedExpense = function (a, b, c) {
        this.expensesFixed.push({ id: this.expensesFixed.length, name: a, amount: b, date: new Date(), duedate: c, ispaid: false });
    };
    MainService.prototype.deleteFixedExpense = function (a) {
        this.expensesFixed.splice(a - 1, 1);
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./demo/src/environments/environment.ts":
/*!**********************************************!*\
  !*** ./demo/src/environments/environment.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./demo/src/main.ts":
/*!**************************!*\
  !*** ./demo/src/main.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./demo/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./demo/src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./demo/src/main.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nioch\Desktop\n\demo\src\main.ts */"./demo/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map