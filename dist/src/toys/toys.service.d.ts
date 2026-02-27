import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ToysService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: CreateToyDto): Promise<{
        name: string;
        id: number;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
    findAll(): Promise<{
        name: string;
        id: number;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        id: number;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
    update(id: number, data: UpdateToyDto): Promise<{
        name: string;
        id: number;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
    remove(id: number): Promise<{
        name: string;
        id: number;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
}
