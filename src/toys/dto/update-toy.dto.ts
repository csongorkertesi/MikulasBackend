import { PartialType } from '@nestjs/mapped-types';
import { CreateToyDto } from './create-toy.dto';
import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { Material } from 'generated/prisma/enums';

export class UpdateToyDto extends PartialType(CreateToyDto) {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name:string

  @IsNumber()
  @IsPositive()
  @IsOptional()
  weight:number

  @IsNotEmpty()
  @IsIn(["wood", "plastic", "metal", "other"])
  @IsOptional()
  material: Material

  @IsNumber()
  @IsNumber()
  @IsOptional()
  childId?:number
}
