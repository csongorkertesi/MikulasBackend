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
exports.ChildrenService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const prismaNamespace_1 = require("../../generated/prisma/internal/prismaNamespace");
let ChildrenService = class ChildrenService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(data) {
        let res;
        try {
            res = await this.prismaService.children.create({ data });
        }
        catch (e) {
            if (e instanceof prismaNamespace_1.PrismaClientKnownRequestError) {
                if (e.code === "P2002") {
                    throw new common_1.BadRequestException("A Child with that name already exists!");
                }
            }
        }
        return res;
    }
    async findAll() {
        return await this.prismaService.children.findMany();
    }
    async findOne(id) {
        const res = await this.prismaService.children.findUnique({ where: { id } });
        if (!res)
            throw new common_1.NotFoundException("Child not found");
        return res;
    }
    async update(id, data) {
        const res = await this.prismaService.children.update({ where: { id }, data }).catch(_ => {
            throw new common_1.NotFoundException("Child not found");
        });
        if (!res)
            throw new common_1.NotFoundException("Child not found");
        return res;
    }
    async remove(id) {
        const res = await this.prismaService.children.delete({ where: { id } }).catch(_ => {
            throw new common_1.NotFoundException("Child not found");
        });
        if (!res)
            throw new common_1.NotFoundException("Child not found");
        return res;
    }
    async linkToy(id, toyId) {
        const res = await this.prismaService.toys.update({ where: { id: toyId }, data: { childId: id } }).catch(_ => {
            throw new common_1.NotFoundException("Invalid parameters");
        });
        if (!res)
            throw new common_1.NotFoundException("Child not found");
        return res;
    }
    async removeToy(id, toyId) {
        const res = await this.prismaService.toys.update({ where: { id: toyId }, data: { childId: null } }).catch(_ => {
            throw new common_1.NotFoundException("Invalid parameters");
        });
        if (!res)
            throw new common_1.NotFoundException("Child not found");
        return res;
    }
};
exports.ChildrenService = ChildrenService;
exports.ChildrenService = ChildrenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChildrenService);
//# sourceMappingURL=children.service.js.map