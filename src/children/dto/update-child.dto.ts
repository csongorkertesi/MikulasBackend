import { PartialType } from '@nestjs/swagger';
import { CreateChildDto } from './create-child.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateChildDto extends PartialType(CreateChildDto) {
  @ApiPropertyOptional({ description: 'Name of the child', example: 'Alexandra' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name:string

  @ApiPropertyOptional({ description: 'Address of the child', example: '1234 Hős utca, Budapest' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  address:string

  @ApiPropertyOptional({ description: 'Whether the child has been good', example: false })
  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  good:boolean
}
