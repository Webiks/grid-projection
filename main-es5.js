(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-label>Matrix</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let mat of matrix\" [value]=\"mat.value\">\n      {{mat.label}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n\n<div>\n  <app-map [pointerEvent]=\"pointerEvent\"\n           (pointerMove)=\"pointerEvent = $event\"\n           [name]=\"'World View'\"\n           [layer]=\"layers.data.BING\"\n           [position]=\"maps.world.position\"\n           [projection]=\"maps.world.projection\"\n           (clickOnMap)=\"clickOnMap($event)\"></app-map>\n\n  <app-map [pointerEvent]=\"pointerEvent\"\n           (pointerMove)=\"pointerEvent = $event\"\n           [name]=\"'Image View'\"\n           [layer]=\"layers.data.WMS.imageB\"\n           [position]=\"maps.image.position\"\n           (clickOnMap)=\"clickOnMap($event)\"></app-map>\n\n</div>\n\n<button (click)=\"clicks = []\">Clear All</button>\n<table>\n  <tr *ngFor=\"let click of clicks; index as index\">\n    <td>\n      <div>\n        <span>\n          {{click[0].coordinate}} - {{click[1].coordinate}}\n        </span>\n        <button (click)=\"clear(index)\">delete</button>\n      </div>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clicks/clicks.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clicks/clicks.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>clicks works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>{{name}}</h2>\n  <div class=\"map\" #map></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvVXNlci9EZXNrdG9wL0RldmVsb3BtZW50L29sLWdyaWQvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4iLCJkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers.service */ "./src/app/layers.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(layers) {
        var _this = this;
        this.layers = layers;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.maps = {
            world: {
                projection: 'EPSG:4326',
                layer: this.layers.data.BING,
                position: {
                    center: [34.909490575692566, 32.30868923493098],
                    rotation: 3.256102283489895,
                    zoom: 18,
                }
            },
            image: {
                layer: this.layers.data.WMS.imageA,
                position: {
                    center: [981.7701764490478, -1059.4717664138395],
                    rotation: 0,
                    zoom: 2,
                },
            }
        };
        this.clicks = [];
        this.tmpClick = [];
        this.clickOnMap = function (e) {
            _this.tmpClick.push(e);
            if (_this.tmpClick.length === 2) {
                _this.clicks.push(_this.tmpClick);
                _this.tmpClick = [];
            }
        };
        this.clearAll = function () { return _this.clicks = []; };
        this.clear = function (index) { return _this.clicks = _this.clicks.filter(function (c, i) { return i !== index; }); };
    }
    AppComponent.ctorParameters = function () { return [
        { type: _layers_service__WEBPACK_IMPORTED_MODULE_2__["LayersService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
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
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _clicks_clicks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clicks/clicks.component */ "./src/app/clicks/clicks.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"],
                _clicks_clicks_component__WEBPACK_IMPORTED_MODULE_5__["ClicksComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clicks/clicks.component.less":
/*!**********************************************!*\
  !*** ./src/app/clicks/clicks.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWNrcy9jbGlja3MuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/clicks/clicks.component.ts":
/*!********************************************!*\
  !*** ./src/app/clicks/clicks.component.ts ***!
  \********************************************/
/*! exports provided: ClicksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClicksComponent", function() { return ClicksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClicksComponent = /** @class */ (function () {
    function ClicksComponent() {
    }
    ClicksComponent.prototype.ngOnInit = function () {
    };
    ClicksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clicks',
            template: __webpack_require__(/*! raw-loader!./clicks.component.html */ "./node_modules/raw-loader/index.js!./src/app/clicks/clicks.component.html"),
            styles: [__webpack_require__(/*! ./clicks.component.less */ "./src/app/clicks/clicks.component.less")]
        })
    ], ClicksComponent);
    return ClicksComponent;
}());



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
var DATA = {
    BING: {
        key: 'AsVccaM44P5n-GYKXaV0oVGdTI665Qx_sMgYBSYRxryH2pLe92iVxUgEtwIt8des',
        imagerySet: ['AerialWithLabels']
    },
    WMS: {
        // imageA: {
        //   extent: [0, -3648.3845212884353, 5472.077182543888, 0],
        //   TRANSFORM_MATRIX: [
        //     [
        //       // x1, y1  - Q11
        //       [0, 0],
        //       [34.91362133519737, 32.31144634590263]
        //     ],
        //     [
        //       // x1, y2 - Q12
        //       [0, 3648.3845212884353],
        //       [34.91280043442864, 32.311824153395875]
        //     ],
        //     [
        //       // x2, y1 - Q21
        //       [5472.077182543888, 0],
        //       [34.91429195343733, 32.31248660001708]
        //     ],
        //     [
        //       // x2, y2 - Q22
        //       [5472.077182543888, 3648.3845212884353],
        //       [34.91347491739288, 32.31287033131449]
        //     ]
        //   ],
        //   url: 'http://geoserver.ansyn.webiks.com/geoserver/public/wms',
        //   LAYERS: 'public:f62b66d9_c1e7_4975_8188_289b0aff5d70'
        // },
        imageB: {
            extent: [0, -3000.2799668788402, 4000.040284737165, 0],
            TRANSFORM_MATRIX: [
                [
                    [
                        7.812578681127235,
                        -2097.677375882673
                    ],
                    [
                        3886159.8021447076,
                        3803932.293233304
                    ]
                ],
                [
                    [
                        11.718868021690895,
                        -621.1000051496184
                    ],
                    [
                        3886158.77722202,
                        3803805.023872538
                    ]
                ],
                [
                    [
                        2742.2151170756733,
                        -2101.583665223237
                    ],
                    [
                        3886082.069862602,
                        3803954.9301670683
                    ]
                ],
                [
                    [
                        535.1616396572183,
                        -1195.3245382124733
                    ],
                    [
                        3886137.7167376042,
                        3803879.4030681183
                    ]
                ],
                [
                    [
                        722.6635280042728,
                        -1187.5119595313458
                    ],
                    [
                        3886130.5265288646,
                        3803882.283991592
                    ]
                ],
                [
                    [
                        695.3195026203274,
                        -1105.4798833795094
                    ],
                    [
                        3886130.379368008,
                        3803871.766620189
                    ]
                ],
                [
                    [
                        660.1628985552547,
                        -968.7597564597821
                    ],
                    [
                        3886128.8661186127,
                        3803856.9114033957
                    ]
                ],
                [
                    [
                        796.883025474982,
                        -984.3849138220367
                    ],
                    [
                        3886122.982896238,
                        3803861.723651715
                    ]
                ],
                [
                    [
                        187.50188834705455,
                        -1039.0729645899276
                    ],
                    [
                        3886151.6179915178,
                        3803854.8981704493
                    ]
                ],
                [
                    [
                        1449.2333453491096,
                        -835.9459188806185
                    ],
                    [
                        3886093.8595165215,
                        3803871.320189422
                    ]
                ],
                [
                    [
                        1820.3308327026552,
                        -843.7584975617458
                    ],
                    [
                        3886075.5998938107,
                        3803879.6871933276
                    ]
                ],
                [
                    [
                        2195.3346093967643,
                        -980.478624481473
                    ],
                    [
                        3886057.236640368,
                        3803898.253538721
                    ]
                ],
                [
                    [
                        1031.2603859088003,
                        -1308.6069290888186
                    ],
                    [
                        3886117.845100404,
                        3803898.320964978
                    ]
                ],
                [
                    [
                        1285.1691930454367,
                        -1339.8572438133278
                    ],
                    [
                        3886109.4954625415,
                        3803906.7872216487
                    ]
                ]
            ],
            TRANSFORM_MATRIX2: [
                [
                    [0, 0],
                    [34.91000966631772, 32.30914520655708]
                ],
                [
                    [0, 3000.2799668788402],
                    [34.90979826294317, 32.30643997042385]
                ],
                [
                    [4000.040284737165, 0],
                    [34.909234372814, 32.309551578999454]
                ],
                [
                    [4000.040284737165, 3000.2799668788402],
                    [34.906384529582624, 32.308148863431796]
                ]
            ],
            TRANSFORM_MATRIX_BEST: [
                [
                    [
                        [0, 0],
                        [34.90989004595932, 32.30761064507408]
                    ],
                    [
                        [3992.227706647056, 0],
                        [34.90860429842663, 32.30761064507408]
                    ]
                ],
                [
                    [[0, 2971.7096162737257], [34.90989004595932, 32.3093548651307]],
                    [[3992.227706647056, 2971.7096162737257], [34.90860429842663, 32.3093548651307]]
                ]
            ],
            TRANSFORM_MATRIX3: [
                [
                    [
                        [
                            0,
                            0
                        ],
                        [
                            34.90989004595932,
                            32.30761064507408
                        ]
                    ],
                    [
                        [
                            1330.742568882352,
                            0
                        ],
                        [
                            34.90946146344842,
                            32.30761064507408
                        ]
                    ],
                    [
                        [
                            2661.485137764704,
                            0
                        ],
                        [
                            34.90903288093753,
                            32.30761064507408
                        ]
                    ],
                    [
                        [
                            3992.227706647056,
                            0
                        ],
                        [
                            34.90860429842663,
                            32.30761064507408
                        ]
                    ]
                ],
                [
                    [
                        [
                            0,
                            990.5698720912419
                        ],
                        [
                            34.90989004595932,
                            32.30819205175962
                        ]
                    ],
                    [
                        [
                            1330.742568882352,
                            990.5698720912419
                        ],
                        [
                            34.90946146344842,
                            32.30819205175962
                        ]
                    ],
                    [
                        [
                            2661.485137764704,
                            990.5698720912419
                        ],
                        [
                            34.90903288093753,
                            32.30819205175962
                        ]
                    ],
                    [
                        [
                            3992.227706647056,
                            990.5698720912419
                        ],
                        [
                            34.90860429842663,
                            32.30819205175962
                        ]
                    ]
                ],
                [
                    [
                        [
                            0,
                            1981.1397441824638
                        ],
                        [
                            34.90989004595932,
                            32.30877345844516
                        ]
                    ],
                    [
                        [
                            1330.742568882352,
                            1981.1397441824638
                        ],
                        [
                            34.90946146344842,
                            32.30877345844516
                        ]
                    ],
                    [
                        [
                            2661.485137764704,
                            1981.1397441824638
                        ],
                        [
                            34.90903288093753,
                            32.30877345844516
                        ]
                    ],
                    [
                        [
                            3992.227706647056,
                            1981.1397441824638
                        ],
                        [
                            34.90860429842663,
                            32.30877345844516
                        ]
                    ]
                ],
                [
                    [
                        [
                            0,
                            2971.7096162737257
                        ],
                        [
                            34.90989004595932,
                            32.3093548651307
                        ]
                    ],
                    [
                        [
                            1330.742568882352,
                            2971.7096162737257
                        ],
                        [
                            34.90946146344842,
                            32.3093548651307
                        ]
                    ],
                    [
                        [
                            2661.485137764704,
                            2971.7096162737257
                        ],
                        [
                            34.90903288093753,
                            32.3093548651307
                        ]
                    ],
                    [
                        [
                            3992.227706647056,
                            2971.7096162737257
                        ],
                        [
                            34.90860429842663,
                            32.3093548651307
                        ]
                    ]
                ]
            ],
            url: 'http://geoserver.ansyn.webiks.com/geoserver/public/wms',
            LAYERS: 'public:def4f9ff_6aa0_4a33_a458_08bda0f54e1b'
        }
    }
};


/***/ }),

/***/ "./src/app/layers.service.ts":
/*!***********************************!*\
  !*** ./src/app/layers.service.ts ***!
  \***********************************/
/*! exports provided: LayersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayersService", function() { return LayersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transforms */ "./src/app/transforms.ts");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_source_BingMaps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/BingMaps */ "./node_modules/ol/source/BingMaps.js");
/* harmony import */ var ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/TileWMS */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/proj/Projection */ "./node_modules/ol/proj/Projection.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data */ "./src/app/data.ts");










var LayersService = /** @class */ (function () {
    function LayersService() {
        var _this = this;
        this.data = {
            OSM: new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__["default"]({
                source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_4__["default"](),
                extent: ol_proj__WEBPACK_IMPORTED_MODULE_8__["transformExtent"]([-180, -90, 180, 90], 'EPSG:4326', 'EPSG:3857')
            }),
            BING: new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__["default"]({
                source: new ol_source_BingMaps__WEBPACK_IMPORTED_MODULE_5__["default"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _data__WEBPACK_IMPORTED_MODULE_9__["DATA"].BING)),
                extent: ol_proj__WEBPACK_IMPORTED_MODULE_8__["transformExtent"]([-180, -90, 180, 90], 'EPSG:4326', 'EPSG:3857')
            }),
            WMS: Object.entries(_data__WEBPACK_IMPORTED_MODULE_9__["DATA"].WMS).reduce(function (prev, _a) {
                var _b;
                var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), key = _c[0], layer = _c[1];
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, prev, (_b = {}, _b[key] = new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__["default"]({
                    source: new ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_6__["default"]({
                        projection: _this.createImageProjection(layer.TRANSFORM_MATRIX3, layer.extent),
                        url: layer.url,
                        params: {
                            VERSION: '1.1.1',
                            LAYERS: layer.LAYERS
                        }
                    })
                }), _b)));
            }, {})
        };
    }
    LayersService.prototype.createImageProjection = function (matrix, extent) {
        var projection = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_7__["default"]({
            code: 'EPSG:32662',
            units: 'pixels',
            extent: extent
        });
        // const transformer = createTransformer(matrix);
        // proj.addCoordinateTransforms(projection, 'EPSG:3857', transformer.fromPixel, transformer.toPixel);
        var bilinearInterpolationTransformer = Object(_transforms__WEBPACK_IMPORTED_MODULE_2__["createBilinearInterpolationTransformer"])(matrix);
        ol_proj__WEBPACK_IMPORTED_MODULE_8__["addCoordinateTransforms"](projection, 'EPSG:4326', bilinearInterpolationTransformer.fromPixel, bilinearInterpolationTransformer.toPixel);
        ol_proj__WEBPACK_IMPORTED_MODULE_8__["addProjection"](projection);
        return projection;
    };
    LayersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LayersService);
    return LayersService;
}());



/***/ }),

/***/ "./src/app/map/map.component.less":
/*!****************************************!*\
  !*** ./src/app/map/map.component.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host h2 {\n  text-align: center;\n}\n:host div.map {\n  width: 40vw;\n  margin: 10px;\n  box-shadow: 0 0 2px 0 black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL0M6L1VzZXJzL1VzZXIvRGVza3RvcC9EZXZlbG9wbWVudC9vbC1ncmlkL3NyYy9hcHAvbWFwL21hcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0FDQUo7QURGQTtFQUtJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgZGl2Lm1hcCB7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMCBibGFjaztcbiAgfVxufVxuIiwiOmhvc3QgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCBkaXYubWFwIHtcbiAgd2lkdGg6IDQwdnc7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAwIGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var _services_pointermove_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/pointermove.service */ "./src/app/map/services/pointermove.service.ts");
/* harmony import */ var _services_click_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/click.service */ "./src/app/map/services/click.service.ts");






var MapComponent = /** @class */ (function () {
    function MapComponent(pointermoveService, clickService) {
        this.pointermoveService = pointermoveService;
        this.clickService = clickService;
        this.pointerMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clickOnMap = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(MapComponent.prototype, "pointerEvent", {
        set: function (e) {
            this.pointermoveService.pointerEvent = e;
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.initMap = function () {
        var _this = this;
        var target = this.mapElem.nativeElement;
        var layerProjection = this.layer.getSource().getProjection();
        var projection = this.projection || layerProjection;
        var view = new ol_View__WEBPACK_IMPORTED_MODULE_3__["default"]({ center: [0, 0], zoom: 3, projection: projection });
        if (this.position) {
            setTimeout(function () {
                var _a = _this.position, zoom = _a.zoom, rotation = _a.rotation, center = _a.center;
                view.setZoom(zoom);
                view.setRotation(rotation);
                view.setCenter(center);
            }, 0);
        }
        return new ol_Map__WEBPACK_IMPORTED_MODULE_2__["default"]({ target: target, view: view, layers: [this.layer] });
    };
    MapComponent.prototype.ngOnInit = function () {
        this.map = this.initMap();
        console.log(this.map.getView().getProjection().getExtent());
        window[this.name] = this.map;
        this.pointermoveService.init(this.map, this.pointerMove);
        this.clickService.init(this.map, this.clickOnMap);
    };
    MapComponent.prototype.ngOnDestroy = function () {
        this.map.setTarget(null);
    };
    MapComponent.ctorParameters = function () { return [
        { type: _services_pointermove_service__WEBPACK_IMPORTED_MODULE_4__["PointermoveService"] },
        { type: _services_click_service__WEBPACK_IMPORTED_MODULE_5__["ClickService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MapComponent.prototype, "pointerMove", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MapComponent.prototype, "clickOnMap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: true })
    ], MapComponent.prototype, "mapElem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MapComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MapComponent.prototype, "layer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MapComponent.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MapComponent.prototype, "projection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MapComponent.prototype, "pointerEvent", null);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
            providers: [_services_pointermove_service__WEBPACK_IMPORTED_MODULE_4__["PointermoveService"], _services_click_service__WEBPACK_IMPORTED_MODULE_5__["ClickService"]],
            styles: [__webpack_require__(/*! ./map.component.less */ "./src/app/map/map.component.less")]
        })
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/map/services/click.service.ts":
/*!***********************************************!*\
  !*** ./src/app/map/services/click.service.ts ***!
  \***********************************************/
/*! exports provided: ClickService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickService", function() { return ClickService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClickService = /** @class */ (function () {
    function ClickService() {
        var _this = this;
        this.onClick = function (e) {
            _this.emitter.emit(e);
        };
    }
    ClickService.prototype.init = function (map, emitter) {
        this.map = map;
        this.emitter = emitter;
        map.on('click', this.onClick);
    };
    ClickService.prototype.ngOnDestroy = function () {
        this.map.un('click', this.onClick);
    };
    ClickService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ClickService);
    return ClickService;
}());



/***/ }),

/***/ "./src/app/map/services/pointermove.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/map/services/pointermove.service.ts ***!
  \*****************************************************/
/*! exports provided: PointermoveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointermoveService", function() { return PointermoveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/Vector */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/Vector */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_geom_Point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/geom/Point */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_style_Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/style/Style */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_style_Circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style/Circle */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_Fill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style/Fill */ "./node_modules/ol/style/Fill.js");










var PointermoveService = /** @class */ (function () {
    function PointermoveService() {
        var _this = this;
        this.vectorSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.vectorStyle = new ol_style_Style__WEBPACK_IMPORTED_MODULE_6__["default"]({
            image: new ol_style_Circle__WEBPACK_IMPORTED_MODULE_8__["default"]({
                radius: 4,
                fill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_9__["default"]({ color: 'black' }),
            })
        });
        this.vectorLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_2__["default"]({
            source: this.vectorSource,
            style: this.vectorStyle
        });
        this.onPointerMove = function (e) { return _this.pointerMove.emit(e); };
    }
    Object.defineProperty(PointermoveService.prototype, "pointerEvent", {
        set: function (e) {
            this.vectorSource.clear();
            if (e && e.target !== this.map) {
                var fromProj = e.target.getView().getProjection();
                var toProj = this.map.getView().getProjection();
                var coords = ol_proj__WEBPACK_IMPORTED_MODULE_7__["transform"](e.coordinate, fromProj, toProj);
                this.vectorSource.addFeature(new ol_Feature__WEBPACK_IMPORTED_MODULE_4__["default"](new ol_geom_Point__WEBPACK_IMPORTED_MODULE_5__["default"](coords)));
            }
        },
        enumerable: true,
        configurable: true
    });
    PointermoveService.prototype.init = function (map, emitter) {
        this.map = map;
        this.pointerMove = emitter;
        map.on('pointermove', this.onPointerMove);
        map.addLayer(this.vectorLayer);
    };
    PointermoveService.prototype.ngOnDestroy = function () {
        this.map.un('pointermove', this.onPointerMove);
        this.map.removeLayer(this.vectorLayer);
    };
    PointermoveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PointermoveService);
    return PointermoveService;
}());



/***/ }),

/***/ "./src/app/transforms.ts":
/*!*******************************!*\
  !*** ./src/app/transforms.ts ***!
  \*******************************/
/*! exports provided: createTransformer, findClosestMat, createBilinearInterpolationTransformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransformer", function() { return createTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findClosestMat", function() { return findClosestMat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBilinearInterpolationTransformer", function() { return createBilinearInterpolationTransformer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var dltjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dltjs */ "./node_modules/dltjs/index.js");
/* harmony import */ var dltjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dltjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/main/es6/index.js");



var SOURCE = 0;
var DEST = 1;
function createTransformer(TRANSFORM_MATRIX) {
    var _a = TRANSFORM_MATRIX.reduce(function (prev, _a) {
        var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), pixel = _b[0], lnglat = _b[1];
        return ({
            world: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](prev.world, [lnglat]), image: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](prev.image, [pixel])
        });
    }, { world: [], image: [] }), world = _a.world, image = _a.image;
    var A = dltjs__WEBPACK_IMPORTED_MODULE_1___default.a.dlt2d(world, image);
    var invA = mathjs__WEBPACK_IMPORTED_MODULE_2__["inv"](A);
    return {
        fromPixel: function (coords) { return dltjs__WEBPACK_IMPORTED_MODULE_1___default.a.transform2d(invA, coords); },
        toPixel: function (coords) { return dltjs__WEBPACK_IMPORTED_MODULE_1___default.a.transform2d(A, coords); }
    };
}
function transformArrayToPairs(array) {
    return array.reduce(function (result, item, index) { return (index % 2 ? result : tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](result, [[item, array[index + 1]]])); }, []);
}
function isBetween(test, one, sec) {
    return (one <= test && test <= sec) || (test <= one && sec <= test);
}
var findClosestMat = function (x, y, matrix, source) {
    var indexRow; // = 0
    var indexCell; // = 0
    // find X
    matrix.forEach(function (row, rowIndex) {
        transformArrayToPairs(row)
            .forEach(function (_a, evenCellIndex) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), prev = _b[0], next = _b[1];
            var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](prev[source], 2), prevX = _c[0], prevY = _c[1];
            var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](next[source], 2), nextX = _d[0], nextY = _d[1];
            if (isBetween(x, prevX, nextX)) {
                console.log('isBetween x');
                indexCell = evenCellIndex * 2;
            }
        });
    });
    // find Y
    transformArrayToPairs(matrix)
        .forEach(function (_a, evenRowIndex) {
        var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_b[0], 1), prevFirstCell = _c[0], _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_b[1], 1), nextFirstCell = _d[0];
        var prevY = prevFirstCell[source][1];
        var nextY = nextFirstCell[source][1];
        if (isBetween(y, prevY, nextY)) {
            indexRow = evenRowIndex * 2;
        }
    });
    console.log({ indexRow: indexRow, indexCell: indexCell, x: x });
    if (!indexRow) {
        indexRow = 0;
        console.log('HELP! indexRow');
    }
    if (!indexCell) {
        indexCell = 0;
        console.log('HELP! indexCell');
    }
    var p1 = matrix[indexRow][indexCell]; // matrix[0][0]; // x1,y1
    var p2 = matrix[indexRow + 1][indexCell]; // matrix[1][0]; // x2,y1
    var p3 = matrix[indexRow][indexCell + 1]; // matrix[0][1]; // x1,y2
    var p4 = matrix[indexRow + 1][indexCell + 1]; // matrix[1][1]; // x2,y2
    return [
        [p1, p2],
        [p3, p4]
    ];
};
var createBilinearInterpolationTransformer = function (matrix) {
    console.log(createBilinearInterpolationTransformer, matrix);
    return {
        fromPixel: function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), x = _b[0], y = _b[1];
            y = -y;
            var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](findClosestMat(x, y, matrix, SOURCE), 2), _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c[0], 2), p1 = _d[0], p2 = _d[1], _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c[1], 2), p3 = _e[0], p4 = _e[1];
            var Q11 = p1[SOURCE];
            var Q12 = p2[SOURCE];
            var Q21 = p3[SOURCE];
            var Q22 = p4[SOURCE];
            var FQ11 = p1[1 - SOURCE];
            var FQ12 = p2[1 - SOURCE];
            var FQ21 = p3[1 - SOURCE];
            var FQ22 = p4[1 - SOURCE];
            var _f = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Q11, 2), x1 = _f[0], y1 = _f[1];
            var _g = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Q22, 2), x2 = _g[0], y2 = _g[1];
            var arg1 = (1 / ((x2 - x1) * (y2 - y1)));
            var m1 = mathjs__WEBPACK_IMPORTED_MODULE_2__["matrix"]([x2 - x, x - x1]);
            var forLNG = mathjs__WEBPACK_IMPORTED_MODULE_2__["matrix"]([[FQ11[0], FQ12[0]], [FQ21[0], FQ22[0]]]);
            var forLAT = mathjs__WEBPACK_IMPORTED_MODULE_2__["matrix"]([[FQ11[1], FQ12[1]], [FQ21[1], FQ22[1]]]);
            var m3 = mathjs__WEBPACK_IMPORTED_MODULE_2__["matrix"]([y2 - y, y - y1]);
            var lng = mathjs__WEBPACK_IMPORTED_MODULE_2__["multiply"](arg1, m1, forLNG, m3);
            var lat = mathjs__WEBPACK_IMPORTED_MODULE_2__["multiply"](arg1, m1, forLAT, m3);
            return [lng, lat];
        },
        toPixel: function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), lng = _b[0], lat = _b[1];
            var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](findClosestMat(lng, lat, matrix, DEST), 2), _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c[0], 2), p1 = _d[0], p2 = _d[1], _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c[1], 2), p3 = _e[0], p4 = _e[1];
            var Q11 = p1[DEST];
            var Q12 = p2[DEST];
            var Q21 = p3[DEST];
            var Q22 = p4[DEST];
            var FQ11 = p1[1 - DEST];
            var FQ12 = p2[1 - DEST];
            var FQ21 = p3[1 - DEST];
            var FQ22 = p4[1 - DEST];
            var _f = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Q11, 2), x1 = _f[0], y1 = _f[1];
            var _g = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](Q22, 2), x2 = _g[0], y2 = _g[1];
            var arg1 = (1 / ((x2 - x1) * (y2 - y1)));
            var m1 = mathjs__WEBPACK_IMPORTED_MODULE_2__["matrix"]([x2 - lng, lng - x1]);
            var forX = mathjs__WEBPACK_IMPORTED_MODULE_2__["matrix"]([[FQ11[0], FQ12[0]], [FQ21[0], FQ22[0]]]);
            var forY = mathjs__WEBPACK_IMPORTED_MODULE_2__["matrix"]([[FQ11[1], FQ12[1]], [FQ21[1], FQ22[1]]]);
            var m3 = mathjs__WEBPACK_IMPORTED_MODULE_2__["matrix"]([y2 - lat, lat - y1]);
            var x = mathjs__WEBPACK_IMPORTED_MODULE_2__["multiply"](arg1, m1, forX, m3);
            var y = mathjs__WEBPACK_IMPORTED_MODULE_2__["multiply"](arg1, m1, forY, m3);
            console.log([x, y]);
            return [x, -y];
        }
    };
};


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Development\ol-grid\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map