import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { Material } from "generated/prisma/enums";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateToyDto {
  @ApiProperty({ description: 'Name of the toy', example: 'Kisautó' })
  @IsNotEmpty()
  @IsString()
  name:string

  @ApiProperty({ 
    description: 'Material of the toy', 
    enum: ['wood', 'plastic', 'metal', 'other'],
    example: 'plastic'
  })
  @IsNotEmpty()
  @IsIn(["wood", "plastic", "metal", "other"])
  material: Material

  @ApiProperty({ description: 'Weight of the toy', example: 1 })
  @IsNumber()
  @IsPositive()
  weight:number

  @ApiPropertyOptional({ description: 'ID of the child this toy belongs to', example: 1 })
  @IsNumber()
  @IsOptional()
  childId?:number
}
