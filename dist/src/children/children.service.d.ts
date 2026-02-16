import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ChildrenService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: CreateChildDto): Promise<any>;
    findAll(): Promise<{
        name: string;
        address: string;
        good: boolean;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        address: string;
        good: boolean;
        id: number;
    }>;
    update(id: number, data: UpdateChildDto): Promise<{
        name: string;
        address: string;
        good: boolean;
        id: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        address: string;
        good: boolean;
        id: number;
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
