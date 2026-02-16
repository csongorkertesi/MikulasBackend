import { Material } from "generated/prisma/enums";
export declare class CreateToyDto {
    name: string;
    material: Material;
    weight: number;
    childId?: number;
}
