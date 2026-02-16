import { CreateToyDto } from './create-toy.dto';
import { Material } from 'generated/prisma/enums';
declare const UpdateToyDto_base: import("@nestjs/common").Type<Partial<CreateToyDto>>;
export declare class UpdateToyDto extends UpdateToyDto_base {
    name: string;
    weight: number;
    material: Material;
    childId?: number;
}
export {};
