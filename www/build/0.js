webpackJsonp([0],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomcdPageModule", function() { return ChatRoomcdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_roomcd__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatRoomcdPageModule = /** @class */ (function () {
    function ChatRoomcdPageModule() {
    }
    ChatRoomcdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_roomcd__["a" /* ChatRoomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_roomcd__["a" /* ChatRoomPage */]),
            ],
        })
    ], ChatRoomcdPageModule);
    return ChatRoomcdPageModule;
}());

//# sourceMappingURL=chat-roomcd.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatRoomPage = /** @class */ (function () {
    function ChatRoomPage(navCtrl, navParams, socket, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.messages = [];
        this.nickname = '';
        this.message = '';
        this.nickname = this.navParams.get('nickname');
        this.getMessages().subscribe(function (message) {
            _this.messages.push(message);
        });
        this.getUsers().subscribe(function (data) {
            var user = data['user'];
            if (data['event'] === 'left') {
                _this.showToast('User left: ' + user);
            }
            else {
                _this.showToast('User joined: ' + user);
            }
        });
    }
    ChatRoomPage.prototype.sendMessage = function () {
        this.socket.emit('add-message', { text: this.message });
        this.message = '';
    };
    ChatRoomPage.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatRoomPage.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('users-changed', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatRoomPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    ChatRoomPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ChatRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-room',template:/*ion-inline-start:"E:\ChatIonic\devdacticSocket\src\pages\chat-roomcd\chat-roomcd.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Chat\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor="let message of messages">\n      \n      <ion-col col-9 *ngIf="message.from !== nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n        <span class="user_name">{{ message.from }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n      </ion-col>\n \n      <ion-col offset-3 col-9 *ngIf="message.from === nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n        <span class="user_name">{{ message.from }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.created | date:\'dd.MM hh:MM\'}}</div>\n      </ion-col>\n \n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n \n<ion-footer>\n  <ion-toolbar>\n    <ion-row class="message_row">\n      <ion-col col-9>\n        <ion-item no-lines>\n          <ion-input type="text" placeholder="Message" [(ngModel)]="message"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button clear color="primary" (click)="sendMessage()" [disabled]="message === \'\'">\n        Send\n      </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\ChatIonic\devdacticSocket\src\pages\chat-roomcd\chat-roomcd.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _d || Object])
    ], ChatRoomPage);
    return ChatRoomPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=chat-roomcd.js.map

/***/ })

});
//# sourceMappingURL=0.js.map