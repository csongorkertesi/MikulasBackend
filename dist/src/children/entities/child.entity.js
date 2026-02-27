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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Child = void 0;
const swagger_1 = require("@nestjs/swagger");
class Child {
    id;
    name;
    address;
    good;
}
exports.Child = Child;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier of the child', example: 1 }),
    __metadata("design:type", Number)
], Child.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the child', example: 'Alexandra' }),
    __metadata("design:type", String)
], Child.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Address of the child',
        example: '1234 Hős utca, Budapest',
    }),
    __metadata("design:type", String)
], Child.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether the child has been good',
        example: false,
    }),
    __metadata("design:type", Boolean)
], Child.prototype, "good", void 0);
//# sourceMappingURL=child.entity.js.map