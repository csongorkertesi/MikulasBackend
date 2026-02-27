import { ChildrenService } from './children.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
export declare class ChildrenController {
    private readonly childrenService;
    constructor(childrenService: ChildrenService);
    create(createChildDto: CreateChildDto): Promise<any>;
    findAll(): Promise<{
        id: number;
        name: string;
        address: string;
        good: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        address: string;
        good: boolean;
    }>;
    update(id: string, updateChildDto: UpdateChildDto): Promise<{
        id: number;
        name: string;
        address: string;
        good: boolean;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        address: string;
        good: boolean;
    }>;
    linkToy(id: string, toyId: string): Promise<{
        id: number;
        name: string;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
    removeToy(id: string, toyId: string): Promise<{
        id: number;
        name: string;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
}
