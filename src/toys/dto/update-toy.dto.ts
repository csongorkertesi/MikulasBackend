import { PartialType } from '@nestjs/swagger';
import { CreateToyDto } from './create-toy.dto';
import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { Material } from 'generated/prisma/enums';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateToyDto extends PartialType(CreateToyDto) {
  @ApiPropertyOptional({ description: 'Name of the toy', example: 'Kisautó' })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name:string

  @ApiPropertyOptional({ description: 'Weight of the toy', example: 1 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  weight:number

  @ApiPropertyOptional({ 
    description: 'Material of the toy', 
    enum: ['wood', 'plastic', 'metal', 'other'],
    example: 'plastic'
  })
  @IsNotEmpty()
  @IsIn(["wood", "plastic", "metal", "other"])
  @IsOptional()
  material: Material

  @ApiPropertyOptional({ description: 'ID of the child this toy belongs to', example: 1 })
  @IsNumber()
  @IsOptional()
  childId?:number
}
