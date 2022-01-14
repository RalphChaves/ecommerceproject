import { CreateProdDto } from './create-prod.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateManyProdDto {
  @IsNotEmpty()
  @ApiProperty()
  prod: CreateProdDto[];
}
