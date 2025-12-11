import { PartialType } from '@nestjs/mapped-types';
import { CreateChildDto } from './create-child.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateChildDto extends PartialType(CreateChildDto) {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name:string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  address:string

  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  good:boolean
}
