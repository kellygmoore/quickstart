"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var collectible_item_1 = require('./collectible-item');
var CollectibleFormComponent = (function () {
    function CollectibleFormComponent() {
        this.value = ['High Dollar Value', 'Family Heirloom', 'Keepsake', 'No Worth'];
        this.model = new collectible_item_1.Collectible(2, 'Album', 'Grandpa Garys baby album from 1944', this.value[2], 'Hall Closet');
        this.submitted = false;
    }
    CollectibleFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(CollectibleFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    CollectibleFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'collectible-form',
            templateUrl: './collectible-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CollectibleFormComponent);
    return CollectibleFormComponent;
}());
exports.CollectibleFormComponent = CollectibleFormComponent;
//# sourceMappingURL=collectible-form.component.js.map