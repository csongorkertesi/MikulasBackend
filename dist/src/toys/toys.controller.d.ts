import { ToysService } from './toys.service';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { ChildrenService } from 'src/children/children.service';
export declare class ToysController {
    private readonly toysService;
    private childrenService;
    constructor(toysService: ToysService, childrenService: ChildrenService);
    create(createToyDto: CreateToyDto): Promise<{
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
    findOne(id: string): Promise<{
        name: string;
        id: number;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
    update(id: string, updateToyDto: UpdateToyDto): Promise<{
        name: string;
        id: number;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: number;
        material: import("../../generated/prisma/enums").Material;
        weight: number;
        childId: number | null;
    }>;
}
