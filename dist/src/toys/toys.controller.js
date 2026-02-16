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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToysController = void 0;
const common_1 = require("@nestjs/common");
const toys_service_1 = require("./toys.service");
const create_toy_dto_1 = require("./dto/create-toy.dto");
const update_toy_dto_1 = require("./dto/update-toy.dto");
const children_service_1 = require("../children/children.service");
const swagger_1 = require("@nestjs/swagger");
let ToysController = class ToysController {
    toysService;
    childrenService;
    constructor(toysService, childrenService) {
        this.toysService = toysService;
        this.childrenService = childrenService;
    }
    create(createToyDto) {
        return this.toysService.create(createToyDto);
    }
    findAll() {
        return this.toysService.findAll();
    }
    findOne(id) {
        return this.toysService.findOne(+id);
    }
    update(id, updateToyDto) {
        return this.toysService.update(+id, updateToyDto);
    }
    remove(id) {
        return this.toysService.remove(+id);
    }
};
exports.ToysController = ToysController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new toy' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Toy successfully created' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiBody)({ type: create_toy_dto_1.CreateToyDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_toy_dto_1.CreateToyDto]),
    __metadata("design:returntype", void 0)
], ToysController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all toys' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all toys' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a toy by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Toy ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Toy found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Toy not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToysController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a toy' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Toy ID' }),
    (0, swagger_1.ApiBody)({ type: update_toy_dto_1.UpdateToyDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Toy successfully updated' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Toy not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_toy_dto_1.UpdateToyDto]),
    __metadata("design:returntype", void 0)
], ToysController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a toy' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Toy ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Toy successfully deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Toy not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToysController.prototype, "remove", null);
exports.ToysController = ToysController = __decorate([
    (0, swagger_1.ApiTags)('toys'),
    (0, common_1.Controller)('toys'),
    __metadata("design:paramtypes", [toys_service_1.ToysService, children_service_1.ChildrenService])
], ToysController);
//# sourceMappingURL=toys.controller.js.map