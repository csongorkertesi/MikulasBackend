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
exports.ToysService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ToysService = class ToysService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(data) {
        if (data.childId) {
            return await this.prismaService.toys.create({ data: {
                    material: data.material,
                    name: data.name,
                    weight: data.weight,
                    child: { connect: { id: data.childId } }
                },
            });
        }
        else {
            return await this.prismaService.toys.create({ data: {
                    material: data.material,
                    name: data.name,
                    weight: data.weight
                },
            });
        }
    }
    async findAll() {
        return await this.prismaService.toys.findMany();
    }
    async findOne(id) {
        const res = await this.prismaService.toys.findUnique({ where: { id } });
        if (!res)
            throw new common_1.NotFoundException("Toy not found");
        return res;
    }
    async update(id, data) {
        const res = await this.prismaService.toys.update({ where: { id }, data }).catch(_ => {
            throw new common_1.NotFoundException("Invalid parameters");
        });
        if (!res)
            throw new common_1.NotFoundException("Toy not found");
        return res;
    }
    async remove(id) {
        const res = await this.prismaService.toys.delete({ where: { id } }).catch(_ => {
            throw new common_1.NotFoundException("Invalid parameters");
        });
        if (!res)
            throw new common_1.NotFoundException("Toy not found");
        return res;
    }
};
exports.ToysService = ToysService;
exports.ToysService = ToysService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ToysService);
//# sourceMappingURL=toys.service.js.map