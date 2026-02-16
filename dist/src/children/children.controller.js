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
exports.ChildrenController = void 0;
const common_1 = require("@nestjs/common");
const children_service_1 = require("./children.service");
const create_child_dto_1 = require("./dto/create-child.dto");
const update_child_dto_1 = require("./dto/update-child.dto");
const swagger_1 = require("@nestjs/swagger");
let ChildrenController = class ChildrenController {
    childrenService;
    constructor(childrenService) {
        this.childrenService = childrenService;
    }
    create(createChildDto) {
        return this.childrenService.create(createChildDto);
    }
    findAll() {
        return this.childrenService.findAll();
    }
    findOne(id) {
        return this.childrenService.findOne(+id);
    }
    update(id, updateChildDto) {
        return this.childrenService.update(+id, updateChildDto);
    }
    remove(id) {
        return this.childrenService.remove(+id);
    }
    linkToy(id, toyId) {
        return this.childrenService.linkToy(+id, +toyId);
    }
    removeToy(id, toyId) {
        return this.childrenService.removeToy(+id, +toyId);
    }
};
exports.ChildrenController = ChildrenController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new child' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Child successfully created' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiBody)({ type: create_child_dto_1.CreateChildDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_child_dto_1.CreateChildDto]),
    __metadata("design:returntype", void 0)
], ChildrenController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all children' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all children' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChildrenController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a child by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Child ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Child found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Child not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChildrenController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a child' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Child ID' }),
    (0, swagger_1.ApiBody)({ type: update_child_dto_1.UpdateChildDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Child successfully updated' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Child not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_child_dto_1.UpdateChildDto]),
    __metadata("design:returntype", void 0)
], ChildrenController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a child' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Child ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Child successfully deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Child not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChildrenController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(":id/toys/:toy"),
    (0, swagger_1.ApiOperation)({ summary: 'Link a toy to a child' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Child ID' }),
    (0, swagger_1.ApiParam)({ name: 'toy', type: 'number', description: 'Toy ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Toy successfully linked to child' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Child or toy not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('toy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChildrenController.prototype, "linkToy", null);
__decorate([
    (0, common_1.Delete)(":id/toys/:toy"),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a toy from a child' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Child ID' }),
    (0, swagger_1.ApiParam)({ name: 'toy', type: 'number', description: 'Toy ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Toy successfully removed from child' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Child or toy not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('toy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ChildrenController.prototype, "removeToy", null);
exports.ChildrenController = ChildrenController = __decorate([
    (0, swagger_1.ApiTags)('children'),
    (0, common_1.Controller)('children'),
    __metadata("design:paramtypes", [children_service_1.ChildrenService])
], ChildrenController);
//# sourceMappingURL=children.controller.js.map