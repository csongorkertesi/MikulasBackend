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
exports.Toy = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../generated/prisma/enums");
class Toy {
    id;
    name;
    material;
    weight;
    childId;
}
exports.Toy = Toy;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier of the toy', example: 1 }),
    __metadata("design:type", Number)
], Toy.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the toy', example: 'Kisautó' }),
    __metadata("design:type", String)
], Toy.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Material of the toy',
        enum: ['wood', 'plastic', 'metal', 'other'],
        example: 'plastic',
    }),
    __metadata("design:type", String)
], Toy.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Weight of the toy', example: 1 }),
    __metadata("design:type", Number)
], Toy.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID of the child this toy belongs to',
        example: 1,
    }),
    __metadata("design:type", Object)
], Toy.prototype, "childId", void 0);
//# sourceMappingURL=toy.entity.js.map