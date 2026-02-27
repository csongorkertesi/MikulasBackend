import { Material } from 'generated/prisma/enums';
export declare class Toy {
    id: number;
    name: string;
    material: Material;
    weight: number;
    childId?: number | null;
}
