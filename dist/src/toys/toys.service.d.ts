import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ToysService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: CreateToyDto): Promise<{
        name: string;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
        id: number;
    }>;
    findAll(): Promise<{
        name: string;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
        id: number;
    }>;
    update(id: number, data: UpdateToyDto): Promise<{
        name: string;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
        id: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
        id: number;
    }>;
}
