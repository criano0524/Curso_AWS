"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
/** @title Form field theming */
let FormFieldThemingExample = class FormFieldThemingExample {
    constructor(fb) {
        this.options = fb.group({
            'color': 'primary',
            'fontSize': [16, forms_1.Validators.min(10)]
        });
    }
    getFontSize() {
        return Math.max(10, this.options.value.fontSize);
    }
};
FormFieldThemingExample = __decorate([
    core_1.Component({
        selector: 'form-field-theming-example',
        templateUrl: 'form-field-theming-example.html',
        styleUrls: ['form-field-theming-example.css']
    })
], FormFieldThemingExample);
exports.FormFieldThemingExample = FormFieldThemingExample;
//# sourceMappingURL=form-field-theming-example.js.map