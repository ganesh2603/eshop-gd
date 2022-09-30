(self["webpackChunkbluebits"] = self["webpackChunkbluebits"] || []).push([["main"],{

/***/ 5341:
/*!*******************************************************************!*\
  !*** ./apps/ngshop/$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 5341;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 9576:
/*!**********************************************!*\
  !*** ./apps/ngshop/src/app/app.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 3569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/users */ 2852);




let AppComponent = class AppComponent {
    constructor(usersService) {
        this.usersService = usersService;
        this.title = 'ngshop';
    }
    ngOnInit() {
        this.usersService.initAppSession();
    }
};
AppComponent.ctorParameters = () => [
    { type: _bluebits_users__WEBPACK_IMPORTED_MODULE_1__.UsersService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'ngshop-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_bluebits_users__WEBPACK_IMPORTED_MODULE_1__.UsersService])
], AppComponent);



/***/ }),

/***/ 4748:
/*!*******************************************!*\
  !*** ./apps/ngshop/src/app/app.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 1211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7094);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 9576);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 7721);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/header/header.component */ 2017);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ 4628);
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bluebits/products */ 3142);
/* harmony import */ var _bluebits_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bluebits/ui */ 9142);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/accordion */ 5396);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/nav/nav.component */ 5721);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8497);
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bluebits/orders */ 583);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ 7965);
/* harmony import */ var _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/messages/messages.component */ 8619);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bluebits/users */ 2852);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 2800);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ 3863);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-stripe */ 2284);






















const routes = [{ path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent }];
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent,
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
            _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__.NavComponent,
            _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__.MessagesComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_15__.StoreModule.forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__.EffectsModule.forRoot([]),
            _bluebits_products__WEBPACK_IMPORTED_MODULE_4__.ProductsModule,
            primeng_accordion__WEBPACK_IMPORTED_MODULE_17__.AccordionModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _bluebits_ui__WEBPACK_IMPORTED_MODULE_5__.UiModule,
            _bluebits_orders__WEBPACK_IMPORTED_MODULE_7__.OrdersModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_19__.ToastModule,
            _bluebits_users__WEBPACK_IMPORTED_MODULE_9__.UsersModule,
            ngx_stripe__WEBPACK_IMPORTED_MODULE_20__.NgxStripeModule.forRoot('pk_test_51LnEq9SDRBiNlaMcI7YoDqKONRFj5CjMUUIxEcAhPBrF16tM77FdS2cYey3SPkNjwFgegvNXuPfYWXxvQTuCL7aS00af4dq3UU')
        ],
        providers: [
            primeng_api__WEBPACK_IMPORTED_MODULE_21__.MessageService,
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS, useClass: _bluebits_users__WEBPACK_IMPORTED_MODULE_9__.JwtInterceptor, multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 7721:
/*!********************************************************************!*\
  !*** ./apps/ngshop/src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-page.component.html */ 7690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);



let HomePageComponent = class HomePageComponent {
};
HomePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'ngshop-home-page',
        template: _raw_loader_home_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], HomePageComponent);



/***/ }),

/***/ 4628:
/*!***************************************************************!*\
  !*** ./apps/ngshop/src/app/shared/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./footer.component.html */ 9939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);



let FooterComponent = class FooterComponent {
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'ngshop-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], FooterComponent);



/***/ }),

/***/ 2017:
/*!***************************************************************!*\
  !*** ./apps/ngshop/src/app/shared/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.component.html */ 4377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);



let HeaderComponent = class HeaderComponent {
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'ngshop-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], HeaderComponent);



/***/ }),

/***/ 8619:
/*!*******************************************************************!*\
  !*** ./apps/ngshop/src/app/shared/messages/messages.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./messages.component.html */ 4162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/orders */ 583);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 3013);





let MessagesComponent = class MessagesComponent {
    constructor(cartService, messageService) {
        this.cartService = cartService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.cartService.cart$.subscribe(() => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Cart Updated!'
            });
        });
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _bluebits_orders__WEBPACK_IMPORTED_MODULE_1__.CartService },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService }
];
MessagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'ngshop-messages',
        template: _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_bluebits_orders__WEBPACK_IMPORTED_MODULE_1__.CartService, primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService])
], MessagesComponent);



/***/ }),

/***/ 5721:
/*!*********************************************************!*\
  !*** ./apps/ngshop/src/app/shared/nav/nav.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nav.component.html */ 3936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);



let NavComponent = class NavComponent {
    constructor() { }
};
NavComponent.ctorParameters = () => [];
NavComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'ngshop-nav',
        template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], NavComponent);



/***/ }),

/***/ 7581:
/*!*****************************************************!*\
  !*** ./apps/ngshop/src/environments/environment.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
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

/***/ 4478:
/*!*********************************!*\
  !*** ./apps/ngshop/src/main.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4477);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4748);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 7581);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 3629:
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api/v1/'
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

/***/ 583:
/*!**********************************!*\
  !*** ./libs/orders/src/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": () => (/* reexport safe */ _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__.OrdersModule),
/* harmony export */   "Order": () => (/* reexport safe */ _lib_models_order__WEBPACK_IMPORTED_MODULE_1__.Order),
/* harmony export */   "OrderItem": () => (/* reexport safe */ _lib_models_order_item__WEBPACK_IMPORTED_MODULE_2__.OrderItem),
/* harmony export */   "OrdersService": () => (/* reexport safe */ _lib_services_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService),
/* harmony export */   "CART_KEY": () => (/* reexport safe */ _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CART_KEY),
/* harmony export */   "CartService": () => (/* reexport safe */ _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService),
/* harmony export */   "Cart": () => (/* reexport safe */ _lib_models_cart__WEBPACK_IMPORTED_MODULE_5__.Cart),
/* harmony export */   "CartItem": () => (/* reexport safe */ _lib_models_cart__WEBPACK_IMPORTED_MODULE_5__.CartItem),
/* harmony export */   "CartItemDetailed": () => (/* reexport safe */ _lib_models_cart__WEBPACK_IMPORTED_MODULE_5__.CartItemDetailed),
/* harmony export */   "ORDER_STATUS": () => (/* reexport safe */ _lib_order_constants__WEBPACK_IMPORTED_MODULE_6__.ORDER_STATUS)
/* harmony export */ });
/* harmony import */ var _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/orders.module */ 6108);
/* harmony import */ var _lib_models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/models/order */ 4009);
/* harmony import */ var _lib_models_order_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/models/order-item */ 1125);
/* harmony import */ var _lib_services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/services/orders.service */ 8531);
/* harmony import */ var _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services/cart.service */ 4296);
/* harmony import */ var _lib_models_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/models/cart */ 8536);
/* harmony import */ var _lib_order_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/order.constants */ 3814);









/***/ }),

/***/ 1278:
/*!*************************************************************************!*\
  !*** ./libs/orders/src/lib/components/cart-icon/cart-icon.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartIconComponent": () => (/* binding */ CartIconComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cart_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cart-icon.component.html */ 2143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 4296);




let CartIconComponent = class CartIconComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartCount = 0;
    }
    ngOnInit() {
        this.cartService.cart$.subscribe((cart) => {
            var _a, _b;
            this.cartCount = (_b = (_a = cart === null || cart === void 0 ? void 0 : cart.items) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        });
    }
};
CartIconComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService }
];
CartIconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'orders-cart-icon',
        template: _raw_loader_cart_icon_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService])
], CartIconComponent);



/***/ }),

/***/ 9954:
/*!*********************************************************************************!*\
  !*** ./libs/orders/src/lib/components/order-summary/order-summary.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSummaryComponent": () => (/* binding */ OrderSummaryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_order_summary_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-summary.component.html */ 3425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 4296);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/orders.service */ 8531);








let OrderSummaryComponent = class OrderSummaryComponent {
    constructor(router, cartService, ordersService) {
        this.router = router;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.isCheckout = false;
        this.router.url.includes('checkout') ? (this.isCheckout = true) : (this.isCheckout = false);
    }
    ngOnInit() {
        this._getOrderSummary();
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
    _getOrderSummary() {
        this.cartService.cart$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe((cart) => {
            this.totalPrice = 0;
            if (cart) {
                cart.items.map((item) => {
                    this.ordersService
                        .getProduct(item.productId)
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
                        .subscribe((product) => {
                        this.totalPrice += product.price * item.quantity;
                    });
                });
            }
        });
    }
    navigateToCheckout() {
        this.router.navigate(['/checkout']);
    }
};
OrderSummaryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService },
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService }
];
OrderSummaryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'orders-order-summary',
        template: _raw_loader_order_summary_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router,
        _services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService,
        _services_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService])
], OrderSummaryComponent);



/***/ }),

/***/ 8536:
/*!********************************************!*\
  !*** ./libs/orders/src/lib/models/cart.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": () => (/* binding */ Cart),
/* harmony export */   "CartItem": () => (/* binding */ CartItem),
/* harmony export */   "CartItemDetailed": () => (/* binding */ CartItemDetailed)
/* harmony export */ });
class Cart {
}
class CartItem {
}
class CartItemDetailed {
}


/***/ }),

/***/ 1125:
/*!**************************************************!*\
  !*** ./libs/orders/src/lib/models/order-item.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderItem": () => (/* binding */ OrderItem)
/* harmony export */ });
class OrderItem {
}


/***/ }),

/***/ 4009:
/*!*********************************************!*\
  !*** ./libs/orders/src/lib/models/order.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order)
/* harmony export */ });
class Order {
}


/***/ }),

/***/ 3814:
/*!************************************************!*\
  !*** ./libs/orders/src/lib/order.constants.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ORDER_STATUS": () => (/* binding */ ORDER_STATUS)
/* harmony export */ });
const ORDER_STATUS = {
    0: {
        label: 'Pending',
        color: 'primary'
    },
    1: {
        label: 'Processed',
        color: 'warning'
    },
    2: {
        label: 'Shipped',
        color: 'warning'
    },
    3: {
        label: 'Delivered',
        color: 'success'
    },
    4: {
        label: 'Failed',
        color: 'danger'
    }
};


/***/ }),

/***/ 6108:
/*!**********************************************!*\
  !*** ./libs/orders/src/lib/orders.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": () => (/* binding */ OrdersModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/cart.service */ 4296);
/* harmony import */ var _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cart-icon/cart-icon.component */ 1278);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/badge */ 3422);
/* harmony import */ var _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cart-page/cart-page.component */ 7275);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputnumber */ 705);
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/order-summary/order-summary.component */ 9954);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/checkout-page/checkout-page.component */ 9714);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 3928);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputmask */ 6352);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dropdown */ 103);
/* harmony import */ var _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/thank-you/thank-you.component */ 213);
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bluebits/users */ 2852);


















const routes = [
    {
        path: 'cart',
        component: _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent
    },
    {
        path: 'checkout',
        canActivate: [_bluebits_users__WEBPACK_IMPORTED_MODULE_6__.AuthGuard],
        component: _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutPageComponent
    },
    {
        path: 'success',
        component: _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__.ThankYouComponent
    }
];
let OrdersModule = class OrdersModule {
    constructor(cartService) {
        cartService.initCartLocalStorage();
    }
};
OrdersModule.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService }
];
OrdersModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            primeng_badge__WEBPACK_IMPORTED_MODULE_10__.BadgeModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes),
            primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumberModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputTextModule,
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_16__.InputMaskModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__.DropdownModule
        ],
        providers: [],
        declarations: [
            _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__.CartIconComponent,
            _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent,
            _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__.OrderSummaryComponent,
            _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutPageComponent,
            _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__.ThankYouComponent
        ],
        exports: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__.CartIconComponent, _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent, _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__.OrderSummaryComponent]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService])
], OrdersModule);



/***/ }),

/***/ 7275:
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/cart-page/cart-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageComponent": () => (/* binding */ CartPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cart_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cart-page.component.html */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 4296);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/orders.service */ 8531);








let CartPageComponent = class CartPageComponent {
    constructor(router, cartService, ordersService) {
        this.router = router;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.cartItemsDetailed = [];
        this.cartCount = 0;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this._getCartDetails();
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
    _getCartDetails() {
        this.cartService.cart$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe((respCart) => {
            var _a;
            this.cartItemsDetailed = [];
            this.cartCount = (_a = respCart === null || respCart === void 0 ? void 0 : respCart.items.length) !== null && _a !== void 0 ? _a : 0;
            respCart.items.forEach((cartItem) => {
                this.ordersService.getProduct(cartItem.productId).subscribe((respProduct) => {
                    this.cartItemsDetailed.push({
                        product: respProduct,
                        quantity: cartItem.quantity
                    });
                });
            });
        });
    }
    backToShop() {
        this.router.navigate(['/products']);
    }
    deleteCartItem(cartItem) {
        this.cartService.deleteCartItem(cartItem.product.id);
    }
    updateCartItemQuantity(event, cartItem) {
        this.cartService.setCartItem({
            productId: cartItem.product.id,
            quantity: event.value
        }, true);
    }
};
CartPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService },
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService }
];
CartPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'orders-cart-page',
        template: _raw_loader_cart_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router,
        _services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService,
        _services_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService])
], CartPageComponent);



/***/ }),

/***/ 9714:
/*!****************************************************************************!*\
  !*** ./libs/orders/src/lib/pages/checkout-page/checkout-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageComponent": () => (/* binding */ CheckoutPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_checkout_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./checkout-page.component.html */ 9887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/users */ 2852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ 4296);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/orders.service */ 8531);










let CheckoutPageComponent = class CheckoutPageComponent {
    constructor(router, usersService, formBuilder, cartService, ordersService) {
        this.router = router;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.isSubmitted = false;
        this.orderItems = [];
        this.countries = [];
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this._initCheckoutForm();
        this._autoFillUserData();
        this._getCartItems();
        this._getCountries();
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    _initCheckoutForm() {
        this.checkoutFormGroup = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            apartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    _autoFillUserData() {
        this.usersService
            .observeCurrentUser()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubscribe$))
            .subscribe((user) => {
            if (user) {
                this.userId = user.id;
                this.checkoutForm.name.setValue(user.name);
                this.checkoutForm.email.setValue(user.email);
                this.checkoutForm.phone.setValue(user.phone);
                this.checkoutForm.city.setValue(user.city);
                this.checkoutForm.street.setValue(user.street);
                this.checkoutForm.country.setValue(user.country);
                this.checkoutForm.zip.setValue(user.zip);
                this.checkoutForm.apartment.setValue(user.apartment);
            }
        });
    }
    _getCartItems() {
        const cart = this.cartService.getCart();
        this.orderItems = cart.items.map((item) => {
            return {
                product: item.productId,
                quantity: item.quantity
            };
        });
    }
    _getCountries() {
        this.countries = this.usersService.getCountries();
    }
    backToCart() {
        this.router.navigate(['/cart']);
    }
    placeOrder() {
        this.isSubmitted = true;
        if (this.checkoutFormGroup.invalid) {
            return;
        }
        const order = {
            orderItems: this.orderItems,
            shippingAddress1: this.checkoutForm.street.value,
            shippingAddress2: this.checkoutForm.apartment.value,
            city: this.checkoutForm.city.value,
            zip: this.checkoutForm.zip.value,
            country: this.checkoutForm.country.value,
            phone: this.checkoutForm.phone.value,
            status: 0,
            user: this.userId,
            dateOrdered: `${Date.now()}`
        };
        this.ordersService.cachedOrderData(order);
        // this.ordersService.createOrder(order).subscribe(
        //   () => {
        //     //redirect to thank you page // payment
        //     this.cartService.emptyCart();
        //     this.router.navigate(['/success']);
        //   },
        //   () => {
        //     //display some message to user
        //   }
        // );
        this.ordersService.createCheckoutSession(this.orderItems).subscribe((error) => {
            if (error) {
                console.log('error in redirect to payment');
            }
            //this.stripeService.redirectToCheckout({ sessionId: session.id });
        });
    }
    get checkoutForm() {
        return this.checkoutFormGroup.controls;
    }
};
CheckoutPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _bluebits_users__WEBPACK_IMPORTED_MODULE_1__.UsersService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService }
];
CheckoutPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'orders-checkout-page',
        template: _raw_loader_checkout_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router,
        _bluebits_users__WEBPACK_IMPORTED_MODULE_1__.UsersService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder,
        _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService,
        _services_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService])
], CheckoutPageComponent);



/***/ }),

/***/ 213:
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/thank-you/thank-you.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouComponent": () => (/* binding */ ThankYouComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_thank_you_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./thank-you.component.html */ 5433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 4296);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/orders.service */ 8531);





let ThankYouComponent = class ThankYouComponent {
    constructor(orderService, cartService) {
        this.orderService = orderService;
        this.cartService = cartService;
    }
    ngOnInit() {
        const orderData = this.orderService.getCachedOrderData();
        this.orderService.createOrder(orderData).subscribe(() => {
            this.cartService.emptyCart();
            this.orderService.removeCachedOrderData();
        });
    }
};
ThankYouComponent.ctorParameters = () => [
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService }
];
ThankYouComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'orders-thank-you-page',
        template: _raw_loader_thank_you_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_services_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService, _services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService])
], ThankYouComponent);



/***/ }),

/***/ 4296:
/*!******************************************************!*\
  !*** ./libs/orders/src/lib/services/cart.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CART_KEY": () => (/* binding */ CART_KEY),
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);



const CART_KEY = 'cart';
let CartService = class CartService {
    constructor() {
        this.cart$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.getCart());
    }
    initCartLocalStorage() {
        const cart = this.getCart();
        if (!cart) {
            const intialCart = {
                items: []
            };
            const intialCartJson = JSON.stringify(intialCart);
            localStorage.setItem(CART_KEY, intialCartJson);
        }
    }
    emptyCart() {
        const intialCart = {
            items: []
        };
        const intialCartJson = JSON.stringify(intialCart);
        localStorage.setItem(CART_KEY, intialCartJson);
        this.cart$.next(intialCart);
    }
    getCart() {
        const cartJsonString = localStorage.getItem(CART_KEY);
        const cart = JSON.parse(cartJsonString);
        return cart;
    }
    setCartItem(cartItem, updateCartItem) {
        const cart = this.getCart();
        const cartItemExist = cart.items.find((item) => item.productId === cartItem.productId);
        if (cartItemExist) {
            cart.items.map((item) => {
                if (item.productId === cartItem.productId) {
                    if (updateCartItem) {
                        item.quantity = cartItem.quantity;
                    }
                    else {
                        item.quantity = item.quantity + cartItem.quantity;
                    }
                    return item;
                }
            });
        }
        else {
            cart.items.push(cartItem);
        }
        const cartJson = JSON.stringify(cart);
        localStorage.setItem(CART_KEY, cartJson);
        this.cart$.next(cart);
        return cart;
    }
    deleteCartItem(productId) {
        const cart = this.getCart();
        const newCart = cart.items.filter((item) => item.productId !== productId);
        cart.items = newCart;
        const cartJsonString = JSON.stringify(cart);
        localStorage.setItem(CART_KEY, cartJsonString);
        this.cart$.next(cart);
    }
};
CartService.ctorParameters = () => [];
CartService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], CartService);



/***/ }),

/***/ 8531:
/*!********************************************************!*\
  !*** ./libs/orders/src/lib/services/orders.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersService": () => (/* binding */ OrdersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8497);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 3629);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-stripe */ 2284);






let OrdersService = class OrdersService {
    constructor(http, stripeService) {
        this.http = http;
        this.stripeService = stripeService;
        this.apiURLOrders = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'orders';
        this.apiURLProducts = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'products';
    }
    getOrders() {
        return this.http.get(this.apiURLOrders);
    }
    getOrder(orderId) {
        return this.http.get(`${this.apiURLOrders}/${orderId}`);
    }
    createOrder(order) {
        return this.http.post(this.apiURLOrders, order);
    }
    updateOrder(orderStaus, orderId) {
        return this.http.put(`${this.apiURLOrders}/${orderId}`, orderStaus);
    }
    deleteOrder(orderId) {
        return this.http.delete(`${this.apiURLOrders}/${orderId}`);
    }
    getOrdersCount() {
        return this.http
            .get(`${this.apiURLOrders}/get/count`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((objectValue) => objectValue.orderCount));
    }
    getTotalSales() {
        return this.http
            .get(`${this.apiURLOrders}/get/totalsales`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((objectValue) => objectValue.totalsales));
    }
    getProduct(productId) {
        return this.http.get(`${this.apiURLProducts}/${productId}`);
    }
    createCheckoutSession(orderItem) {
        return this.http.post(`${this.apiURLOrders}/create-checkout-session`, orderItem).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((session) => {
            return this.stripeService.redirectToCheckout({ sessionId: session.id });
        }));
    }
    cachedOrderData(order) {
        localStorage.setItem('orderData', JSON.stringify(order));
    }
    getCachedOrderData() {
        return JSON.parse(localStorage.getItem('orderData'));
    }
    removeCachedOrderData() {
        localStorage.removeItem('orderData');
    }
};
OrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: ngx_stripe__WEBPACK_IMPORTED_MODULE_4__.StripeService }
];
OrdersService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient, ngx_stripe__WEBPACK_IMPORTED_MODULE_4__.StripeService])
], OrdersService);



/***/ }),

/***/ 3142:
/*!************************************!*\
  !*** ./libs/products/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* reexport safe */ _lib_products_module__WEBPACK_IMPORTED_MODULE_0__.ProductsModule),
/* harmony export */   "CategoriesService": () => (/* reexport safe */ _lib_services_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService),
/* harmony export */   "ProductsService": () => (/* reexport safe */ _lib_services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService),
/* harmony export */   "Category": () => (/* reexport safe */ _lib_models_category__WEBPACK_IMPORTED_MODULE_3__.Category),
/* harmony export */   "Product": () => (/* reexport safe */ _lib_models_product__WEBPACK_IMPORTED_MODULE_4__.Product)
/* harmony export */ });
/* harmony import */ var _lib_products_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/products.module */ 7125);
/* harmony import */ var _lib_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/categories.service */ 370);
/* harmony import */ var _lib_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/products.service */ 3884);
/* harmony import */ var _lib_models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models/category */ 8765);
/* harmony import */ var _lib_models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models/product */ 2211);







/***/ }),

/***/ 5934:
/*!*******************************************************************************************!*\
  !*** ./libs/products/src/lib/components/categories-banner/categories-banner.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesBannerComponent": () => (/* binding */ CategoriesBannerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_categories_banner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./categories-banner.component.html */ 7019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/categories.service */ 370);






let CategoriesBannerComponent = class CategoriesBannerComponent {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
        this.categories = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.categoriesService
            .getCategories()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$))
            .subscribe((categories) => {
            this.categories = categories;
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
};
CategoriesBannerComponent.ctorParameters = () => [
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService }
];
CategoriesBannerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'products-categories-banner',
        template: _raw_loader_categories_banner_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_services_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService])
], CategoriesBannerComponent);



/***/ }),

/***/ 6633:
/*!*******************************************************************************************!*\
  !*** ./libs/products/src/lib/components/featured-products/featured-products.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedProductsComponent": () => (/* binding */ FeaturedProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_featured_products_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./featured-products.component.html */ 1827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ 3884);






let FeaturedProductsComponent = class FeaturedProductsComponent {
    constructor(prodService) {
        this.prodService = prodService;
        this.featuredProducts = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._getFeaturedProducts();
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
    _getFeaturedProducts() {
        this.prodService
            .getFeaturedProducts(4)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$))
            .subscribe((products) => {
            this.featuredProducts = products;
        });
    }
};
FeaturedProductsComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService }
];
FeaturedProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'products-featured-products',
        template: _raw_loader_featured_products_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService])
], FeaturedProductsComponent);



/***/ }),

/***/ 4493:
/*!*********************************************************************************!*\
  !*** ./libs/products/src/lib/components/product-item/product-item.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductItemComponent": () => (/* binding */ ProductItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_product_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-item.component.html */ 1672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/orders */ 583);
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/product */ 2211);





let ProductItemComponent = class ProductItemComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() { }
    addProductToCart() {
        const cartItem = {
            productId: this.product.id,
            quantity: 1
        };
        this.cartService.setCartItem(cartItem);
    }
};
ProductItemComponent.ctorParameters = () => [
    { type: _bluebits_orders__WEBPACK_IMPORTED_MODULE_1__.CartService }
];
ProductItemComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ProductItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'products-product-item',
        template: _raw_loader_product_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_bluebits_orders__WEBPACK_IMPORTED_MODULE_1__.CartService])
], ProductItemComponent);



/***/ }),

/***/ 4549:
/*!***************************************************************************************!*\
  !*** ./libs/products/src/lib/components/products-search/products-search.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsSearchComponent": () => (/* binding */ ProductsSearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_products_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./products-search.component.html */ 3199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);



let ProductsSearchComponent = class ProductsSearchComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductsSearchComponent.ctorParameters = () => [];
ProductsSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'products-search',
        template: _raw_loader_products_search_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], ProductsSearchComponent);



/***/ }),

/***/ 8765:
/*!**************************************************!*\
  !*** ./libs/products/src/lib/models/category.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": () => (/* binding */ Category)
/* harmony export */ });
class Category {
}


/***/ }),

/***/ 2211:
/*!*************************************************!*\
  !*** ./libs/products/src/lib/models/product.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
class Product {
}


/***/ }),

/***/ 9320:
/*!****************************************************************************!*\
  !*** ./libs/products/src/lib/pages/product-page/product-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageComponent": () => (/* binding */ ProductPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_product_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-page.component.html */ 766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/orders */ 583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ 3884);








let ProductPageComponent = class ProductPageComponent {
    constructor(prodService, route, cartService) {
        this.prodService = prodService;
        this.route = route;
        this.cartService = cartService;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.quantity = 1;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.productid) {
                this._getProduct(params.productid);
            }
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
    addProductToCart() {
        const cartItem = {
            productId: this.product.id,
            quantity: this.quantity
        };
        this.cartService.setCartItem(cartItem);
    }
    _getProduct(id) {
        this.prodService
            .getProduct(id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$))
            .subscribe((resProduct) => {
            this.product = resProduct;
        });
    }
};
ProductPageComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _bluebits_orders__WEBPACK_IMPORTED_MODULE_1__.CartService }
];
ProductPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'products-product-page',
        template: _raw_loader_product_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute,
        _bluebits_orders__WEBPACK_IMPORTED_MODULE_1__.CartService])
], ProductPageComponent);



/***/ }),

/***/ 7354:
/*!******************************************************************************!*\
  !*** ./libs/products/src/lib/pages/products-list/products-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListComponent": () => (/* binding */ ProductsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_products_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./products-list.component.html */ 8453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/categories.service */ 370);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ 3884);






let ProductsListComponent = class ProductsListComponent {
    constructor(prodService, catService, route) {
        this.prodService = prodService;
        this.catService = catService;
        this.route = route;
        this.products = [];
        this.categories = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            params.categoryid ? this._getProducts([params.categoryid]) : this._getProducts();
            params.categoryid ? (this.isCategoryPage = true) : (this.isCategoryPage = false);
        });
        this._getCategories();
    }
    _getProducts(categoriesFilter) {
        this.prodService.getProducts(categoriesFilter).subscribe((resProducts) => {
            this.products = resProducts;
        });
    }
    _getCategories() {
        this.catService.getCategories().subscribe((resCats) => {
            this.categories = resCats;
        });
    }
    categoryFilter() {
        const selectedCategories = this.categories
            .filter((category) => category.checked)
            .map((category) => category.id);
        this._getProducts(selectedCategories);
    }
};
ProductsListComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService },
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ProductsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'products-list',
        template: _raw_loader_products_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService,
        _services_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute])
], ProductsListComponent);



/***/ }),

/***/ 7125:
/*!**************************************************!*\
  !*** ./libs/products/src/lib/products.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluebits/orders */ 583);
/* harmony import */ var _components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/products-search/products-search.component */ 4549);
/* harmony import */ var _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/categories-banner/categories-banner.component */ 5934);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-item/product-item.component */ 4493);
/* harmony import */ var _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/featured-products/featured-products.component */ 6633);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/checkbox */ 2332);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/rating */ 8015);
/* harmony import */ var _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/products-list/products-list.component */ 7354);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/product-page/product-page.component */ 9320);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputnumber */ 705);
/* harmony import */ var _bluebits_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bluebits/ui */ 9142);

















const routes = [
    {
        path: 'products',
        component: _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent
    },
    {
        path: 'category/:categoryid',
        component: _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent
    },
    {
        path: 'products/:productid',
        component: _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__.ProductPageComponent
    }
];
let ProductsModule = class ProductsModule {
};
ProductsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _bluebits_orders__WEBPACK_IMPORTED_MODULE_0__.OrdersModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes),
            primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule,
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__.CheckboxModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            primeng_rating__WEBPACK_IMPORTED_MODULE_15__.RatingModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_16__.InputNumberModule,
            _bluebits_ui__WEBPACK_IMPORTED_MODULE_7__.UiModule
        ],
        declarations: [
            _components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_1__.ProductsSearchComponent,
            _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesBannerComponent,
            _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__.ProductItemComponent,
            _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__.FeaturedProductsComponent,
            _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent,
            _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__.ProductPageComponent
        ],
        exports: [
            _components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_1__.ProductsSearchComponent,
            _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesBannerComponent,
            _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__.ProductItemComponent,
            _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__.FeaturedProductsComponent,
            _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent,
            _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__.ProductPageComponent
        ]
    })
], ProductsModule);



/***/ }),

/***/ 370:
/*!**************************************************************!*\
  !*** ./libs/products/src/lib/services/categories.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesService": () => (/* binding */ CategoriesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8497);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 3629);




let CategoriesService = class CategoriesService {
    constructor(http) {
        this.http = http;
        this.apiURLCategories = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'categories';
    }
    getCategories() {
        return this.http.get(this.apiURLCategories);
    }
    getCategory(categoryId) {
        return this.http.get(`${this.apiURLCategories}/${categoryId}`);
    }
    createCategory(category) {
        return this.http.post(this.apiURLCategories, category);
    }
    updateCategory(category) {
        return this.http.put(`${this.apiURLCategories}/${category.id}`, category);
    }
    deleteCategory(categoryId) {
        return this.http.delete(`${this.apiURLCategories}/${categoryId}`);
    }
};
CategoriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CategoriesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient])
], CategoriesService);



/***/ }),

/***/ 3884:
/*!************************************************************!*\
  !*** ./libs/products/src/lib/services/products.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8497);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 3629);





let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
        this.apiURLProducts = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'products';
    }
    getProducts(categoriesFilter) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        if (categoriesFilter) {
            params = params.append('categories', categoriesFilter.join(','));
        }
        return this.http.get(this.apiURLProducts, { params: params });
    }
    createProduct(productData) {
        return this.http.post(this.apiURLProducts, productData);
    }
    getProduct(productId) {
        return this.http.get(`${this.apiURLProducts}/${productId}`);
    }
    updateProduct(productData, productid) {
        return this.http.put(`${this.apiURLProducts}/${productid}`, productData);
    }
    deleteProduct(productId) {
        return this.http.delete(`${this.apiURLProducts}/${productId}`);
    }
    getProductsCount() {
        return this.http
            .get(`${this.apiURLProducts}/get/count`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((objectValue) => objectValue.productCount));
    }
    getFeaturedProducts(count) {
        return this.http.get(`${this.apiURLProducts}/get/featured/${count}`);
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ProductsService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient])
], ProductsService);



/***/ }),

/***/ 9142:
/*!******************************!*\
  !*** ./libs/ui/src/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModule": () => (/* reexport safe */ _lib_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule)
/* harmony export */ });
/* harmony import */ var _lib_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui.module */ 6546);



/***/ }),

/***/ 9281:
/*!***************************************************************!*\
  !*** ./libs/ui/src/lib/components/banner/banner.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_banner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./banner.component.html */ 6182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);



let BannerComponent = class BannerComponent {
    constructor() { }
};
BannerComponent.ctorParameters = () => [];
BannerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'ui-banner',
        template: _raw_loader_banner_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])
], BannerComponent);



/***/ }),

/***/ 6457:
/*!*****************************************************************!*\
  !*** ./libs/ui/src/lib/components/gallery/gallery.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gallery.component.html */ 89);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);



let GalleryComponent = class GalleryComponent {
    ngOnInit() {
        if (this.hasImages) {
            this.selectedImageUrl = this.images[0];
        }
    }
    changeSelectedImage(imageUrl) {
        this.selectedImageUrl = imageUrl;
    }
    get hasImages() {
        var _a;
        return ((_a = this.images) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
};
GalleryComponent.propDecorators = {
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
GalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'ui-gallery',
        template: _raw_loader_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], GalleryComponent);



/***/ }),

/***/ 6546:
/*!**************************************!*\
  !*** ./libs/ui/src/lib/ui.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModule": () => (/* binding */ UiModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/banner/banner.component */ 9281);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/gallery/gallery.component */ 6457);






let UiModule = class UiModule {
};
UiModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule],
        declarations: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent],
        exports: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent]
    })
], UiModule);



/***/ }),

/***/ 2852:
/*!*********************************!*\
  !*** ./libs/users/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildUserSession": () => (/* reexport safe */ _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSession),
/* harmony export */   "buildUserSessionFailed": () => (/* reexport safe */ _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionFailed),
/* harmony export */   "buildUserSessionSuccess": () => (/* reexport safe */ _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionSuccess),
/* harmony export */   "USERS_FEATURE_KEY": () => (/* reexport safe */ _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__.USERS_FEATURE_KEY),
/* harmony export */   "initialUsersState": () => (/* reexport safe */ _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__.initialUsersState),
/* harmony export */   "reducer": () => (/* reexport safe */ _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   "getUser": () => (/* reexport safe */ _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__.getUser),
/* harmony export */   "getUserIsAuth": () => (/* reexport safe */ _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__.getUserIsAuth),
/* harmony export */   "getUsersState": () => (/* reexport safe */ _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__.getUsersState),
/* harmony export */   "UsersFacade": () => (/* reexport safe */ _lib_state_users_facade__WEBPACK_IMPORTED_MODULE_4__.UsersFacade),
/* harmony export */   "UsersModule": () => (/* reexport safe */ _lib_users_module__WEBPACK_IMPORTED_MODULE_5__.UsersModule),
/* harmony export */   "UsersService": () => (/* reexport safe */ _lib_services_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService),
/* harmony export */   "User": () => (/* reexport safe */ _lib_models_user__WEBPACK_IMPORTED_MODULE_7__.User),
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _lib_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__.AuthGuard),
/* harmony export */   "JwtInterceptor": () => (/* reexport safe */ _lib_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__.JwtInterceptor),
/* harmony export */   "AuthService": () => (/* reexport safe */ _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService)
/* harmony export */ });
/* harmony import */ var _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/state/users.actions */ 6173);
/* harmony import */ var _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/state/users.reducer */ 8026);
/* harmony import */ var _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/state/users.selectors */ 2891);
/* harmony import */ var _lib_state_users_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/state/users.models */ 8208);
/* harmony import */ var _lib_state_users_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/state/users.facade */ 2964);
/* harmony import */ var _lib_users_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/users.module */ 9965);
/* harmony import */ var _lib_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/services/users.service */ 4885);
/* harmony import */ var _lib_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/models/user */ 9647);
/* harmony import */ var _lib_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/services/auth-guard.service */ 9721);
/* harmony import */ var _lib_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/services/jwt.interceptor */ 5665);
/* harmony import */ var _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/services/auth.service */ 4414);













/***/ }),

/***/ 9647:
/*!*******************************************!*\
  !*** ./libs/users/src/lib/models/user.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
}


/***/ }),

/***/ 1648:
/*!***********************************************************!*\
  !*** ./libs/users/src/lib/pages/login/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.component.html */ 3544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4414);
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/localstorage.service */ 4605);







let LoginComponent = class LoginComponent {
    constructor(formBuilder, auth, localstorageService, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.localstorageService = localstorageService;
        this.router = router;
        this.isSubmitted = false;
        this.authError = false;
        this.authMessage = 'Email or Password are wrong';
    }
    ngOnInit() {
        this._initLoginForm();
    }
    _initLoginForm() {
        this.loginFormGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.loginFormGroup.invalid)
            return;
        this.auth.login(this.loginForm.email.value, this.loginForm.password.value).subscribe((user) => {
            this.authError = false;
            this.localstorageService.setToken(user.token);
            this.router.navigate(['/']);
        }, (error) => {
            this.authError = true;
            if (error.status !== 400) {
                this.authMessage = 'Error in the Server, please try again later!';
            }
        });
    }
    get loginForm() {
        return this.loginFormGroup.controls;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__.LocalstorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'users-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService,
        _services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__.LocalstorageService,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router])
], LoginComponent);



/***/ }),

/***/ 9721:
/*!***********************************************************!*\
  !*** ./libs/users/src/lib/services/auth-guard.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.service */ 4605);




let AuthGuard = class AuthGuard {
    constructor(router, localStorageToken) {
        this.router = router;
        this.localStorageToken = localStorageToken;
    }
    canActivate(route, state) {
        const token = this.localStorageToken.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            if (tokenDecode.isAdmin && !this._tokenExpired(tokenDecode.exp))
                return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_0__.LocalstorageService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router, _localstorage_service__WEBPACK_IMPORTED_MODULE_0__.LocalstorageService])
], AuthGuard);



/***/ }),

/***/ 4414:
/*!*****************************************************!*\
  !*** ./libs/users/src/lib/services/auth.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 3629);
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.service */ 4605);






let AuthService = class AuthService {
    constructor(http, token, router) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.apiURLUsers = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'users';
    }
    login(email, password) {
        return this.http.post(`${this.apiURLUsers}/login`, { email, password });
    }
    logout() {
        this.token.removeToken();
        this.router.navigate(['/login']);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_1__.LocalstorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient,
        _localstorage_service__WEBPACK_IMPORTED_MODULE_1__.LocalstorageService,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router])
], AuthService);



/***/ }),

/***/ 5665:
/*!********************************************************!*\
  !*** ./libs/users/src/lib/services/jwt.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.service */ 4605);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ 3629);




let JwtInterceptor = class JwtInterceptor {
    constructor(localstorageToken) {
        this.localstorageToken = localstorageToken;
    }
    intercept(request, next) {
        const token = this.localstorageToken.getToken();
        const isAPIUrl = request.url.startsWith(_env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl);
        if (token && isAPIUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_0__.LocalstorageService }
];
JwtInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_localstorage_service__WEBPACK_IMPORTED_MODULE_0__.LocalstorageService])
], JwtInterceptor);



/***/ }),

/***/ 4605:
/*!*************************************************************!*\
  !*** ./libs/users/src/lib/services/localstorage.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalstorageService": () => (/* binding */ LocalstorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);


const TOKEN = 'jwtToken';
let LocalstorageService = class LocalstorageService {
    setToken(data) {
        localStorage.setItem(TOKEN, data);
    }
    getToken() {
        return localStorage.getItem(TOKEN);
    }
    removeToken() {
        localStorage.removeItem(TOKEN);
    }
    isValidToken() {
        const token = this.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            return !this._tokenExpired(tokenDecode.exp);
        }
        else {
            return false;
        }
    }
    getUserIdFromToken() {
        const token = this.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            if (tokenDecode) {
                return tokenDecode.userId;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
};
LocalstorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], LocalstorageService);



/***/ }),

/***/ 4885:
/*!******************************************************!*\
  !*** ./libs/users/src/lib/services/users.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8497);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 3629);
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n-iso-countries */ 6733);
/* harmony import */ var _state_users_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/users.facade */ 2964);







let UsersService = class UsersService {
    constructor(http, usersFacade) {
        this.http = http;
        this.usersFacade = usersFacade;
        this.apiURLUsers = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'users';
        i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__.registerLocale(__webpack_require__(/*! i18n-iso-countries/langs/en.json */ 1662));
    }
    getUsers() {
        return this.http.get(this.apiURLUsers);
    }
    getUser(userId) {
        return this.http.get(`${this.apiURLUsers}/${userId}`);
    }
    createUser(user) {
        return this.http.post(this.apiURLUsers, user);
    }
    updateUser(user) {
        return this.http.put(`${this.apiURLUsers}/${user.id}`, user);
    }
    deleteUser(userId) {
        return this.http.delete(`${this.apiURLUsers}/${userId}`);
    }
    getUsersCount() {
        return this.http
            .get(`${this.apiURLUsers}/get/count`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((objectValue) => objectValue.userCount));
    }
    getCountries() {
        return Object.entries(i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__.getNames('en', { select: 'official' })).map((entry) => {
            return {
                id: entry[0],
                name: entry[1]
            };
        });
    }
    getCountry(countryKey) {
        return i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__.getName(countryKey, 'en');
    }
    initAppSession() {
        this.usersFacade.buildUserSession();
    }
    observeCurrentUser() {
        return this.usersFacade.currentUser$;
    }
    isCurrentUserAuth() {
        return this.usersFacade.isAuthenticated$;
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _state_users_facade__WEBPACK_IMPORTED_MODULE_2__.UsersFacade }
];
UsersService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient, _state_users_facade__WEBPACK_IMPORTED_MODULE_2__.UsersFacade])
], UsersService);



/***/ }),

/***/ 6173:
/*!***************************************************!*\
  !*** ./libs/users/src/lib/state/users.actions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildUserSession": () => (/* binding */ buildUserSession),
/* harmony export */   "buildUserSessionSuccess": () => (/* binding */ buildUserSessionSuccess),
/* harmony export */   "buildUserSessionFailed": () => (/* binding */ buildUserSessionFailed)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 2800);

const buildUserSession = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Users] Build User Session');
const buildUserSessionSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Users] Build User Session Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const buildUserSessionFailed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Users] Build User Session Failed');


/***/ }),

/***/ 7037:
/*!***************************************************!*\
  !*** ./libs/users/src/lib/state/users.effects.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersEffects": () => (/* binding */ UsersEffects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 3863);
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.actions */ 6173);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/localstorage.service */ 4605);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ 4885);








let UsersEffects = class UsersEffects {
    constructor(actions$, localstorageService, usersService) {
        this.actions$ = actions$;
        this.localstorageService = localstorageService;
        this.usersService = usersService;
        this.buildUserSession$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSession), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.concatMap)(() => {
            if (this.localstorageService.isValidToken()) {
                const userId = this.localstorageService.getUserIdFromToken();
                if (userId) {
                    return this.usersService.getUser(userId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((user) => {
                        return _users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionSuccess({ user: user });
                    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionFailed())));
                }
                else {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionFailed());
                }
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionFailed());
            }
        })));
    }
};
UsersEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions },
    { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__.LocalstorageService },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
UsersEffects = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions,
        _services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__.LocalstorageService,
        _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService])
], UsersEffects);



/***/ }),

/***/ 2964:
/*!**************************************************!*\
  !*** ./libs/users/src/lib/state/users.facade.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersFacade": () => (/* binding */ UsersFacade)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 2800);
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.actions */ 6173);
/* harmony import */ var _users_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.selectors */ 2891);





let UsersFacade = class UsersFacade {
    constructor(store) {
        this.store = store;
        this.currentUser$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_users_selectors__WEBPACK_IMPORTED_MODULE_1__.getUser));
        this.isAuthenticated$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_users_selectors__WEBPACK_IMPORTED_MODULE_1__.getUserIsAuth));
    }
    buildUserSession() {
        this.store.dispatch(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSession());
    }
};
UsersFacade.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store }
];
UsersFacade = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store])
], UsersFacade);



/***/ }),

/***/ 8208:
/*!**************************************************!*\
  !*** ./libs/users/src/lib/state/users.models.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8026:
/*!***************************************************!*\
  !*** ./libs/users/src/lib/state/users.reducer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USERS_FEATURE_KEY": () => (/* binding */ USERS_FEATURE_KEY),
/* harmony export */   "initialUsersState": () => (/* binding */ initialUsersState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 2800);
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.actions */ 6173);


const USERS_FEATURE_KEY = 'users';
const initialUsersState = {
    user: null,
    isAuthenticated: false
};
const usersReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialUsersState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSession, (state) => (Object.assign({}, state))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionSuccess, (state, action) => (Object.assign(Object.assign({}, state), { user: action.user, isAuthenticated: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionFailed, (state) => (Object.assign(Object.assign({}, state), { user: null, isAuthenticated: false }))));
function reducer(state, action) {
    return usersReducer(state, action);
}


/***/ }),

/***/ 2891:
/*!*****************************************************!*\
  !*** ./libs/users/src/lib/state/users.selectors.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUsersState": () => (/* binding */ getUsersState),
/* harmony export */   "getUser": () => (/* binding */ getUser),
/* harmony export */   "getUserIsAuth": () => (/* binding */ getUserIsAuth)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 2800);
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.reducer */ 8026);


// Lookup the 'Users' feature state managed by NgRx
const getUsersState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_users_reducer__WEBPACK_IMPORTED_MODULE_0__.USERS_FEATURE_KEY);
const getUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getUsersState, (state) => state.user);
const getUserIsAuth = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getUsersState, (state) => state.isAuthenticated);


/***/ }),

/***/ 9965:
/*!********************************************!*\
  !*** ./libs/users/src/lib/users.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 1648);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 3928);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 2800);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ 3863);
/* harmony import */ var _state_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/users.reducer */ 8026);
/* harmony import */ var _state_users_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/users.effects */ 7037);
/* harmony import */ var _state_users_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/users.facade */ 2964);













const routes = [
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    }
];
let UsersModule = class UsersModule {
};
UsersModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreModule.forFeature(_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__.USERS_FEATURE_KEY, _state_users_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.EffectsModule.forFeature([_state_users_effects__WEBPACK_IMPORTED_MODULE_2__.UsersEffects])
        ],
        declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent],
        providers: [_state_users_facade__WEBPACK_IMPORTED_MODULE_3__.UsersFacade]
    })
], UsersModule);



/***/ }),

/***/ 3569:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/ngshop/src/app/app.component.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <ngshop-header></ngshop-header>\n  <router-outlet></router-outlet>\n  <ngshop-footer></ngshop-footer>\n  <ngshop-messages></ngshop-messages>\n</div>\n");

/***/ }),

/***/ 7690:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/ngshop/src/app/pages/home-page/home-page.component.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ui-banner></ui-banner>\n<products-categories-banner></products-categories-banner>\n<products-featured-products></products-featured-products>\n");

/***/ }),

/***/ 9939:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/ngshop/src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<footer>\n  <div class=\"p-grid footer-wrapper\">\n    <div class=\"p-col-8\">&copy; 1994 - 2022 E-Shop</div>\n    <div class=\"p-col-4 social\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"pi pi-facebook\"></i></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"pi pi-twitter\"></i></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\"><i class=\"pi pi-youtube\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ 4377:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/ngshop/src/app/shared/header/header.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<header>\n  <div class=\"p-grid\">\n    <div class=\"p-col-3\">\n      <div class=\"logo\">\n        <img src=\"assets/images/logo.png\" alt=\"logo\" />\n      </div>\n    </div>\n    <div class=\"p-col-4 search\"><products-search></products-search></div>\n    <div class=\"p-col-3 p-offset-1 navigation\">\n      <ngshop-nav></ngshop-nav>\n    </div>\n    <div class=\"p-col-1 tools\">\n      <i class=\"pi pi-user p-text-secondary\" style=\"font-size: 1.5rem\"></i>\n      <orders-cart-icon></orders-cart-icon>\n    </div>\n  </div>\n</header>\n");

/***/ }),

/***/ 4162:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/ngshop/src/app/shared/messages/messages.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p-toast></p-toast>\n");

/***/ }),

/***/ 3936:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./apps/ngshop/src/app/shared/nav/nav.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ul class=\"nav\">\n  <li><a routerLink=\"/\">Home</a></li>\n  <li><a routerLink=\"/products\">Products</a></li>\n  <li><a routerLink=\"/contact\">Contact</a></li>\n</ul>\n");

/***/ }),

/***/ 2143:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/orders/src/lib/components/cart-icon/cart-icon.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<i\n  class=\"pi pi-shopping-cart p-mr-4 p-text-secondary\"\n  pBadge\n  style=\"font-size: 1.5rem\"\n  [value]=\"cartCount\"\n  severity=\"danger\"\n  routerLink=\"/cart\"\n></i>\n");

/***/ }),

/***/ 3425:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/orders/src/lib/components/order-summary/order-summary.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"order-summary\">\n  <h3>Order Summary</h3>\n  <div class=\"summary-price\">\n    <span>Items Price</span>\n    <span>{{ totalPrice | currency }}</span>\n  </div>\n  <div class=\"summary-price\">\n    <span>Packing & Shipping</span>\n    <span class=\"free\">Free</span>\n  </div>\n  <div class=\"to-checkout\">\n    <div class=\"summary-price\">\n      <span>Total Price</span>\n      <span>{{ totalPrice | currency }}</span>\n    </div>\n    <div class=\"checkout-button\" *ngIf=\"!isCheckout\">\n      <p-button label=\"Checkout\" (onClick)=\"navigateToCheckout()\"></p-button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 836:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/orders/src/lib/pages/cart-page/cart-page.component.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"cart-page\">\n  <div class=\"p-grid\">\n    <div class=\"p-col-8\">\n      <div>\n        <p-button\n          label=\"Continue shopping\"\n          icon=\"pi pi-arrow-left\"\n          (onClick)=\"backToShop()\"\n        ></p-button>\n      </div>\n      <div>\n        <h4>My Cart: {{ cartCount }} Item(s)</h4>\n      </div>\n      <div class=\"cart-shipping p-mb-5\">\n        Shipping after the payment, Delivery time : 1 to 4 working days\n      </div>\n      <div class=\"cart-item p-mb-5\" *ngFor=\"let cartItem of cartItemsDetailed\">\n        <div class=\"p-grid p-fluid\">\n          <div class=\"p-col-2 cart-item-image\">\n            <img [src]=\"cartItem.product.image\" [attr.alt]=\"cartItem.product.name\" />\n          </div>\n          <div class=\"p-col-7\">\n            <div class=\"cart-item-name\">{{ cartItem.product.name }}</div>\n            <div class=\"cart-item-price\">{{ cartItem.product.price | currency }}</div>\n            <div class=\"cart-item-remove\">\n              <p-button icon=\"pi pi-trash\" (onClick)=\"deleteCartItem(cartItem)\"></p-button>\n            </div>\n          </div>\n          <div class=\"p-col-3\">\n            <div class=\"p-field cart-item-quantity\">\n              <p-inputNumber\n                mode=\"decimal\"\n                [showButtons]=\"true\"\n                [inputId]=\"cartItem.product.id\"\n                [min]=\"1\"\n                [max]=\"100\"\n                [(ngModel)]=\"cartItem.quantity\"\n                (onInput)=\"updateCartItemQuantity($event, cartItem)\"\n              >\n              </p-inputNumber>\n            </div>\n            <div class=\"cart-item-subtotal\">\n              Subtotal:\n              <span class=\"cart-item-subtotal-value\">{{\n                cartItem.product.price * cartItem.quantity | currency\n              }}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"p-col-4\">\n      <orders-order-summary></orders-order-summary>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 9887:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/orders/src/lib/pages/checkout-page/checkout-page.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"checkout-page\">\n  <div>\n    <p-button label=\"Back to cart\" icon=\"pi pi-arrow-left\" (onClick)=\"backToCart()\"></p-button>\n  </div>\n  <div class=\"p-grid checkout-form\">\n    <div class=\"p-col-8\">\n      <form [formGroup]=\"checkoutFormGroup\">\n        <div class=\"p-fluid p-formgrid p-grid\">\n          <div class=\"p-field p-col-4\">\n            <label for=\"name\">Name</label>\n            <input formControlName=\"name\" id=\"name\" type=\"text\" pInputText />\n            <small *ngIf=\"checkoutForm.name.invalid && isSubmitted\" class=\"p-error\"\n              >Name is required</small\n            >\n          </div>\n          <div class=\"p-field p-col-4\">\n            <label for=\"email\">Email</label>\n            <input formControlName=\"email\" id=\"email\" type=\"text\" pInputText />\n            <small *ngIf=\"checkoutForm.email.invalid && isSubmitted\" class=\"p-error\"\n              ><span *ngIf=\"checkoutForm.email.errors.required\">email is required</span>\n              <span *ngIf=\"checkoutForm.email.errors.email\">email is invalid</span></small\n            >\n          </div>\n          <div class=\"p-field p-col-4\">\n            <label for=\"color\">Phone</label><br />\n            <p-inputMask\n              mask=\"(999) 999-9999\"\n              formControlName=\"phone\"\n              placeholder=\"(999) 999-9999\"\n            ></p-inputMask>\n            <small *ngIf=\"checkoutForm.phone.invalid && isSubmitted\" class=\"p-error\"\n              >phone is required</small\n            >\n          </div>\n        </div>\n        <div class=\"p-fluid p-formgrid p-grid\">\n          <div class=\"p-field p-col-4\">\n            <label for=\"street\">Street</label>\n            <input formControlName=\"street\" id=\"street\" type=\"text\" pInputText />\n            <small *ngIf=\"checkoutForm.street.invalid && isSubmitted\" class=\"p-error\"\n              >Street is required</small\n            >\n          </div>\n          <div class=\"p-field p-col-4\">\n            <label for=\"street\">Apartment</label>\n            <input formControlName=\"apartment\" id=\"apartment\" type=\"text\" pInputText />\n            <small *ngIf=\"checkoutForm.apartment.invalid && isSubmitted\" class=\"p-error\"\n              >Apartment is required</small\n            >\n          </div>\n          <div class=\"p-field p-col-4\">\n            <label for=\"street\">Zip Code</label>\n            <input formControlName=\"zip\" id=\"zip\" type=\"text\" pInputText />\n            <small *ngIf=\"checkoutForm.zip.invalid && isSubmitted\" class=\"p-error\"\n              >Zip is required</small\n            >\n          </div>\n          <div class=\"p-field p-col-4\">\n            <label for=\"city\">City</label>\n            <input formControlName=\"city\" id=\"city\" type=\"text\" pInputText />\n            <small *ngIf=\"checkoutForm.city.invalid && isSubmitted\" class=\"p-error\"\n              >City is required</small\n            >\n          </div>\n          <div class=\"p-field p-col-4\">\n            <label for=\"country\">Country</label><br />\n            <p-dropdown\n              [options]=\"countries\"\n              formControlName=\"country\"\n              optionLabel=\"name\"\n              optionValue=\"id\"\n              [filter]=\"true\"\n              filterBy=\"name\"\n              [showClear]=\"true\"\n              placeholder=\"Select a Country\"\n            ></p-dropdown>\n            <small *ngIf=\"checkoutForm.country.invalid && isSubmitted\" class=\"p-error\"\n              >Country is required</small\n            >\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"p-col-4\">\n      <orders-order-summary></orders-order-summary>\n      <div class=\"checkout-button\">\n        <p-button label=\"Place-Order\" (onClick)=\"placeOrder()\"></p-button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 5433:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/orders/src/lib/pages/thank-you/thank-you.component.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"checkout-page\">\n  <div class=\"thankyou-page\">\n    <h2>Thank you for Shopping with us!</h2>\n    <h3>We have recieved your order and it will be delivered in the next 3 days</h3>\n    <p-button label=\"Back to shop\" routerLink=\"/\"></p-button>\n  </div>\n</div>\n");

/***/ }),

/***/ 7019:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/products/src/lib/components/categories-banner/categories-banner.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"categories-banner\">\n  <h3>Categories</h3>\n  <div class=\"p-grid\">\n    <div class=\"p-col-2\" *ngFor=\"let category of categories\">\n      <div\n        class=\"category\"\n        [routerLink]=\"'/category/' + category.id\"\n        [ngStyle]=\"{ backgroundColor: category.color }\"\n      >\n        <div class=\"category-icon\">\n          <i class=\"pi pi-{{ category.icon }}\"></i>\n        </div>\n        <div class=\"category-name\">{{ category.name }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 1827:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/products/src/lib/components/featured-products/featured-products.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"featured-products p-mt-5\">\n  <h3 class=\"p-mb-1\">Feautured Products</h3>\n  <div class=\"p-grid\">\n    <div class=\"p-col-3\" *ngFor=\"let product of featuredProducts\">\n      <products-product-item [product]=\"product\"></products-product-item>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 1672:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/products/src/lib/components/product-item/product-item.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"product-item\" *ngIf=\"product\">\n  <div class=\"product-item-wrapper\">\n    <img [routerLink]=\"'/products/' + product.id\" [src]=\"product.image\" class=\"image\" alt=\"\" />\n    <h4 class=\"name\">{{ product.name }}</h4>\n    <h5 class=\"price\">{{ product.price | currency }}</h5>\n    <p-button\n      styleClass=\"p-mt-3 add-to-cart\"\n      label=\"Add to cart\"\n      icon=\"pi pi-shopping-cart\"\n      (onClick)=\"addProductToCart()\"\n    ></p-button>\n  </div>\n</div>\n");

/***/ }),

/***/ 3199:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/products/src/lib/components/products-search/products-search.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"products-search\">\n  <i class=\"pi pi-search\"></i>\n  <input\n    type=\"text\"\n    placeholder=\"Find products\"\n    class=\"products-search-input\"\n    name=\"search\"\n    id=\"search\"\n  />\n</div>\n");

/***/ }),

/***/ 766:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/products/src/lib/pages/product-page/product-page.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"product-page\" *ngIf=\"product\">\n  <div class=\"p-grid\">\n    <div class=\"p-col-6\">\n      <ui-gallery [images]=\"product.images\"></ui-gallery>\n    </div>\n    <div class=\"p-col-6 product\">\n      <h2 class=\"product-name\">{{ product.name }}</h2>\n      <p class=\"product-desc\">\n        {{ product.description }}\n      </p>\n      <div class=\"product-rating\">\n        <p-rating [(ngModel)]=\"product.rating\" [cancel]=\"false\" [disabled]=\"true\"></p-rating>\n      </div>\n      <div class=\"product-price\">\n        {{ product.price | currency }}\n        <span class=\"price-before\">{{ product.price + 18 | currency }}</span>\n      </div>\n      <div class=\"product-quantity\">\n        <div class=\"p-field p-col-12 p-md-3 p-p-0\">\n          <label for=\"quantity\">Quantity</label>\n          <p-inputNumber\n            [(ngModel)]=\"quantity\"\n            mode=\"decimal\"\n            [showButtons]=\"true\"\n            inputId=\"quantity\"\n            [min]=\"1\"\n            [max]=\"100\"\n          >\n          </p-inputNumber>\n        </div>\n      </div>\n      <div class=\"product-actions\">\n        <button\n          pButton\n          pRipple\n          type=\"button\"\n          label=\"Buy Now\"\n          class=\"p-button-rounded p-mr-2\"\n        ></button>\n        <button\n          pButton\n          pRipple\n          type=\"button\"\n          label=\"Add to Cart\"\n          class=\"p-button-rounded\"\n          (click)=\"addProductToCart()\"\n        ></button>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-grid product-rich-desc\">\n    <div class=\"p-col-12\">\n      <div [innerHTML]=\"product.richDescription\"></div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 8453:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/products/src/lib/pages/products-list/products-list.component.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"products-page\">\n  <div class=\"p-grid\">\n    <div class=\"p-col-3\" *ngIf=\"!isCategoryPage\">\n      <h4>Categories</h4>\n      <div class=\"p-field-checkbox\" *ngFor=\"let category of categories\">\n        <p-checkbox\n          [(ngModel)]=\"category.checked\"\n          binary=\"true\"\n          [inputId]=\"category.id\"\n          (onChange)=\"categoryFilter()\"\n        ></p-checkbox>\n        <label for=\"{{ category.id }}\">{{ category.name }}</label>\n      </div>\n    </div>\n    <div [ngClass]=\"{ 'p-col-9': !isCategoryPage, 'p-col-12': isCategoryPage }\">\n      <div class=\"p-grid\" *ngIf=\"products\">\n        <div\n          [ngClass]=\"{ 'p-col-4': !isCategoryPage, 'p-col-3': isCategoryPage }\"\n          *ngFor=\"let product of products\"\n        >\n          <products-product-item [product]=\"product\"></products-product-item>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 6182:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/ui/src/lib/components/banner/banner.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"banner\">\n  <div class=\"p-grid\">\n    <div class=\"p-col-5 p-offset-1 banner-text\">\n      <h1>The Best Products</h1>\n      <h2>in Every Category</h2>\n      <p-button\n        styleClass=\"p-mt-4 banner-button\"\n        label=\"See more\"\n        icon=\"pi pi-chevron-right\"\n        iconPos=\"right\"\n      ></p-button>\n    </div>\n    <div class=\"p-col-6 banner-image animate__animated animate__slideInLeft\">\n      <img src=\"assets/images/banner-image.svg\" alt=\"\" />\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 89:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/ui/src/lib/components/gallery/gallery.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"gallery\" *ngIf=\"hasImages\">\n  <div class=\"main-image\">\n    <img [src]=\"selectedImageUrl\" alt=\"\" />\n  </div>\n  <div class=\"images\">\n    <ul>\n      <li\n        *ngFor=\"let imageUrl of images\"\n        (click)=\"changeSelectedImage(imageUrl)\"\n        [ngStyle]=\"{ 'background-image': 'url(' + imageUrl + ')' }\"\n      ></li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ 3544:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/users/src/lib/pages/login/login.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"login-register\">\n  <div class=\"login-register-panel\">\n    <div class=\"p-grid\">\n      <div class=\"p-col-6\">\n        <img src=\"assets/images/login-photo.png\" />\n      </div>\n      <div class=\"p-col-6 p-p-5\">\n        <h3>Welcome!</h3>\n        <h2>Login Page</h2>\n        <form [formGroup]=\"loginFormGroup\">\n          <div class=\"p-grid p-mt-6\">\n            <div class=\"p-col-12\">\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\n                <input type=\"text\" formControlName=\"email\" pInputText placeholder=\"Email\" />\n              </div>\n              <small *ngIf=\"loginForm.email.invalid && isSubmitted\" class=\"p-error\"\n                ><span *ngIf=\"loginForm.email.errors.required\">email is required</span>\n                <span *ngIf=\"loginForm.email.errors.email\">email is invalid</span></small\n              >\n            </div>\n            <div class=\"p-col-12\">\n              <div class=\"p-inputgroup\">\n                <span class=\"p-inputgroup-addon\"><i class=\"pi pi-lock\"></i></span>\n                <input\n                  type=\"password\"\n                  formControlName=\"password\"\n                  pInputText\n                  placeholder=\"Password\"\n                />\n              </div>\n              <small *ngIf=\"loginForm.password.invalid && isSubmitted\" class=\"p-error\"\n                >Password is required\n              </small>\n            </div>\n            <div class=\"p-col-12\">\n              <p-button label=\"Submit\" styleClass=\"full-btn\" (onClick)=\"onSubmit()\"></p-button>\n            </div>\n            <div class=\"p-col-12\" *ngIf=\"isSubmitted && authError\">\n              <small class=\"p-error\">{{ authMessage }}</small>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4478)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map