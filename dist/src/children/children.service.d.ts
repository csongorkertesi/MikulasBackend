import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ChildrenService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: CreateChildDto): Promise<any>;
    findAll(): Promise<{
        name: string;
        id: number;
        address: string;
        good: boolean;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        id: number;
        address: string;
        good: boolean;
    }>;
    update(id: number, data: UpdateChildDto): Promise<{
        name: string;
        id: number;
        address: string;
        good: boolean;
    }>;
    remove(id: number): Promise<{
        name: string;
        id: number;
        address: string;
        good: boolean;
    }>;
    linkToy(id: number, toyId: number): Promise<{
        name: string;
        id: number;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
    removeToy(id: number, toyId: number): Promise<{
        name: string;
        id: number;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
}
