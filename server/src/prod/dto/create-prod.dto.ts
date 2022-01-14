import { IsString, IsNotEmpty, MinLength, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProdDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  imageUrl: string;
}
