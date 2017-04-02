webpackJsonp([1,4],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(671)
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/Users/l3o/tx-fitness/src/dashboard.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__(672),
            styles: [__webpack_require__(377)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/l3o/tx-fitness/src/home.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(fb, _auth, route) {
        this._auth = _auth;
        this.route = route;
        // login model
        this.user = new __WEBPACK_IMPORTED_MODULE_4__model_user__["a" /* UserModel */]();
        this.auth = true;
        //Model Driven Form
        this.form = fb.group({
            username: [, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            password: [, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._auth.authenticateUser(this.user).subscribe(function (data) {
            //console.log(data); // <- comment out so data wont show
            if (data.success) {
                _this.auth = true; // <- Bootstrap alert msg
                _this._auth.storeUSerData(data.token, data.user); // <- funciton from services taken token and the user
                _this.route.navigate(['/dashboard']);
            }
            else {
                _this.auth = false; // <- IF it was a bad auht then send error msg to user 
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__(673),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/l3o/tx-fitness/src/login.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());
//# sourceMappingURL=/Users/l3o/tx-fitness/src/user.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(_auth) {
        this._auth = _auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._auth.getProfile().subscribe(function (data) {
            _this.user = data.user;
        }, function (err) {
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile',
            template: __webpack_require__(674)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());
//# sourceMappingURL=/Users/l3o/tx-fitness/src/profile.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    //Make private so wont effect other routs - Create instance of FormBuilder
    function RegisterComponent(fb, _auth, route) {
        this._auth = _auth;
        this.route = route;
        // User model
        this.user = new __WEBPACK_IMPORTED_MODULE_3__model_user__["a" /* UserModel */]();
        //Model Driven Form
        this.form = fb.group({
            name: [, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            username: [, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            email: [, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            password: [, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
    }
    RegisterComponent.prototype.registerForm = function () {
        var _this = this;
        // Register user
        this._auth.registerUser(this.user).subscribe(function (data) {
            if (_this.form) {
                console.log("created a user");
                _this.route.navigate(['/login']);
            }
            else {
                console.log("Please fill out form correctly");
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'register',
            template: __webpack_require__(675)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/l3o/tx-fitness/src/register.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_auth, _route) {
        this._auth = _auth;
        this._route = _route;
    }
    AuthGuard.prototype.canActivate = function () {
        // If is logged in active route
        if (this._auth.loggedIn()) {
            console.log("success");
            return true;
        }
        else {
            console.log("false");
            this._route.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/l3o/tx-fitness/src/auth.guard.js.map

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = ".jumbo-img{\n  background-image: url('../assets/txfitness.jpg');\n  background-size:cover;\n  height:92vh;\n}\n.hero-title{\n  margin-top:10em;\n  /*width: 45%;\n  border: 2px solid white;\n  margin: 0 auto;\n  padding: 53px;*/\n  color:black;\n}\n.arrow-down{\n  margin-top: 25vh;\n  color: black;\n}\n.buttons{\n  padding-top: 20px;\n}\n.btn {\n    border-width: 2px;\n    width: 140px;\n    margin-left: 10px;\n}\n"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 395;


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/l3o/tx-fitness/src/main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_auth) {
        this._auth = _auth;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._auth.getAllPosts();
    };
    AppComponent.prototype.onLogout = function () {
        this._auth.logoutUser();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(676),
            styles: [__webpack_require__(377)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/l3o/tx-fitness/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* routing */]
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/l3o/tx-fitness/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







// Export to use
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot([
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */] }
]);
//# sourceMappingURL=/Users/l3o/tx-fitness/src/app.routing.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/l3o/tx-fitness/src/environment.js.map

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>1 Month Program</h3>\n\n  <div class=\"col-md-12\">\n  <table class=\"table\">\n    <!-- Table Heading -->\n    <thead>\n      <tr>\n        <th class=\"col-md-1\"></th>\n        <th class=\"col-md-1\">Day 1</th>\n        <th class=\"col-md-1\">Day 2</th>\n        <th class=\"col-md-1\">Day 3</th>\n        <th class=\"col-md-1\">Day 5</th>\n        <th class=\"col-md-1\">Day 6</th>\n        <th class=\"col-md-1\">Day 7</th>\n      </tr>\n    </thead>\n    <!-- Local Table Info -->\n    <tbody>\n      <tr>\n        <td> Week 1 </td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n      </tr>\n      <tr>\n        <td> Week 2 </td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n      </tr>\n      <tr>\n        <td> Week 3 </td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n      </tr>\n      <tr>\n        <td> Week 4 </td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n        <td><input type=\"checkbox\" aria-label=\"...\"></td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbo-img text-center\">\n  <div class=\"hero-title\">\n    <h2>TX Fitness</h2>\n    <p>Get motivate today!</p>\n    <div class=\"buttons\">\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Join Now</a>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Member Login</a>\n    </div>\n  </div>\n  <div class=\"arrow-down\">\n    <p><span class=\"glyphicon glyphicon-chevron-down\"></span></p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3>Express Backend</h3>\n      <p>...</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Angular 4 Frontend</h3>\n      <p>...</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>JWT Token Auth</h3>\n      <p>...</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Login</h3>\n  <form class=\"col-md-12\" [formGroup]=\"form\" (ngSubmit)=\"login()\">\n    <div class=\"form-group col-md-12\">\n      <div class=\"alert alert-danger\" *ngIf=\"!auth\">\n        <p>Sorry, you entered wrong username or password</p>\n      </div>\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\"\n      class=\"form-control\"\n      formControlName=\"username\"\n      placeholder=\"usernmae\">\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\"\n      class=\"form-control\"\n      formControlName=\"password\"\n      placeholder=\"password\">\n      <button type=\"submit\" name=\"button\" class=\"btn btn-default\">Login</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"user\">\n  <h2>{{user.name}}</h2>\n  <p>{{user.username}}</p>\n  <p>{{user.email}}</p>\n</div>\n<div class=\"container text-center\" *ngIf=\"!user\">\n  <h1>Unauthorized</h1>\n  <h2>Please login</h2>\n</div>\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 col-md-offset-1\">\n  <h3>Register</h3>\n  <form class=\"col-md-12\" [formGroup]=\"form\" (ngSubmit)=\"registerForm()\">\n    <div class=\"form-group col-md-12\">\n      <!-- [(ndModel)] is where the data will be stored, here it would be UserModel -->\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"user.name\"\n      class=\"form-control\"\n      formControlName=\"name\"\n      placeholder=\"name\">\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\"\n      class=\"form-control\"\n      formControlName=\"username\"\n      placeholder=\"username\">\n      <input type=\"text\" name=\"email\" [(ngModel)]=\"user.email\"\n      class=\"form-control\"\n      formControlName=\"email\"\n      placeholder=\"email\">\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\"\n      class=\"form-control\"\n      formControlName=\"password\"\n      placeholder=\"password\">\n    </div>\n    <button type=\"submit\" name=\"button\" class=\"btn btn-default\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"\">TX | Fitness</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li routerLinkActive=\"active\"><a routerLink=\"home\">Home</a></li>\n        <li *ngIf=\"_auth.loggedIn()\" routerLinkActive=\"active\"><a routerLink=\"dashboard\">Dashboard</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"_auth.loggedIn()\" routerLinkActive=\"active\"><a routerLink=\"profile\">Profile</a></li>\n        <li *ngIf=\"!_auth.loggedIn()\" routerLinkActive=\"active\"><a routerLink=\"login\">Member Login</a></li>\n        <li *ngIf=\"_auth.loggedIn()\" routerLinkActive=\"active\"><a routerLink=\"home\" (click)=\"onLogout()\">Logout</a></li>\n        <li *ngIf=\"!_auth.loggedIn()\" routerLinkActive=\"active\"><a routerLink=\"register\">Join Now</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(396);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
    }
    // Get all users from API -- Not in use
    AuthService.prototype.getAllPosts = function () {
        return this._http.get('api/user')
            .map(function (res) { return res.json(); });
    };
    // Register Use from API
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('api/user/create', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Login user from API
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('api/user/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this._http.get('api/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Store user data in localStorage
    AuthService.prototype.storeUSerData = function (token, user) {
        localStorage.setItem('id_token', token); // Setting key/ value from params
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token; // <- pass token to var
        this.user = user; // <- pass user to var
    };
    // Clear Token on Logout
    AuthService.prototype.logoutUser = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear(); // <- clears local storage
    };
    // Is logged in protect routes
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService = __decorate([
        // <- Map operator from rxjs
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/l3o/tx-fitness/src/auth.service.js.map

/***/ })

},[703]);
//# sourceMappingURL=main.bundle.map