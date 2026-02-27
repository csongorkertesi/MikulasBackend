import { ApiProperty } from '@nestjs/swagger';

export class Child {
  @ApiProperty({ description: 'Unique identifier of the child', example: 1 })
  id: number;

  @ApiProperty({ description: 'Name of the child', example: 'Alexandra' })
  name: string;

  @ApiProperty({
    description: 'Address of the child',
    example: '1234 Hős utca, Budapest',
  })
  address: string;

  @ApiProperty({
    description: 'Whether the child has been good',
    example: false,
  })
  good: boolean;
}
