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
exports.UpdateToyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_toy_dto_1 = require("./create-toy.dto");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
const swagger_2 = require("@nestjs/swagger");
class UpdateToyDto extends (0, swagger_1.PartialType)(create_toy_dto_1.CreateToyDto) {
    name;
    weight;
    material;
    childId;
}
exports.UpdateToyDto = UpdateToyDto;
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ description: 'Name of the toy', example: 'Kisautó' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateToyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ description: 'Weight of the toy', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateToyDto.prototype, "weight", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({
        description: 'Material of the toy',
        enum: ['wood', 'plastic', 'metal', 'other'],
        example: 'plastic'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)(["wood", "plastic", "metal", "other"]),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateToyDto.prototype, "material", void 0);
__decorate([
    (0, swagger_2.ApiPropertyOptional)({ description: 'ID of the child this toy belongs to', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateToyDto.prototype, "childId", void 0);
//# sourceMappingURL=update-toy.dto.js.map