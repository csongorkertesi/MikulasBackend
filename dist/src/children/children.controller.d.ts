import { ChildrenService } from './children.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
export declare class ChildrenController {
    private readonly childrenService;
    constructor(childrenService: ChildrenService);
    create(createChildDto: CreateChildDto): Promise<any>;
    findAll(): Promise<{
        name: string;
        address: string;
        good: boolean;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        address: string;
        good: boolean;
        id: number;
    }>;
    update(id: string, updateChildDto: UpdateChildDto): Promise<{
        name: string;
        address: string;
        good: boolean;
        id: number;
    }>;
    remove(id: string): Promise<{
        name: string;
        address: string;
        good: boolean;
        id: number;
    }>;
    linkToy(id: string, toyId: string): Promise<{
        name: string;
        id: number;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
    removeToy(id: string, toyId: string): Promise<{
        name: string;
        id: number;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
}
