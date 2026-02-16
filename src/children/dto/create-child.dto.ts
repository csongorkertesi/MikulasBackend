import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateChildDto {
  @ApiProperty({ description: 'Name of the child', example: 'Alexandra' })
  @IsString()
  @IsNotEmpty()
  name:string

  @ApiProperty({ description: 'Address of the child', example: '1234 Hős utca, Budapest' })
  @IsString()
  @IsNotEmpty()
  address:string

    @ApiProperty({ description: 'Whether the child has been good', example: false })
  @IsBoolean()
  @IsNotEmpty()
  good:boolean
}
