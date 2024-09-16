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
require("rxjs/add/operator/startWith");
require("rxjs/add/operator/map");
/**
 * @title Filter autocomplete
 */
let AutocompleteFilterExample = class AutocompleteFilterExample {
    /**
     * @title Filter autocomplete
     */
    constructor() {
        this.myControl = new forms_1.FormControl();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .startWith(null)
            .map(val => val ? this.filter(val) : this.options.slice());
    }
    filter(val) {
        return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }
};
AutocompleteFilterExample = __decorate([
    core_1.Component({
        selector: 'autocomplete-filter-example',
        templateUrl: 'autocomplete-filter-example.html',
        styleUrls: ['autocomplete-filter-example.css']
    })
], AutocompleteFilterExample);
exports.AutocompleteFilterExample = AutocompleteFilterExample;
//# sourceMappingURL=autocomplete-filter-example.js.map