import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { Material } from "generated/prisma/enums";

export class CreateToyDto {
  @IsNotEmpty()
  @IsString()
  name:string

  @IsNotEmpty()
  @IsIn(["wood", "plastic", "metal", "other"])
  material: Material

  @IsNumber()
  @IsPositive()
  weight:number

  @IsNumber()
  @IsOptional()
  childId?:number
}
