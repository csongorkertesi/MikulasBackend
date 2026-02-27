import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Material } from 'generated/prisma/enums';

export class Toy {
  @ApiProperty({ description: 'Unique identifier of the toy', example: 1 })
  id: number;

  @ApiProperty({ description: 'Name of the toy', example: 'Kisautó' })
  name: string;

  @ApiProperty({
    description: 'Material of the toy',
    enum: ['wood', 'plastic', 'metal', 'other'],
    example: 'plastic',
  })
  material: Material;

  @ApiProperty({ description: 'Weight of the toy', example: 1 })
  weight: number;

  @ApiPropertyOptional({
    description: 'ID of the child this toy belongs to',
    example: 1,
  })
  childId?: number | null;
}
