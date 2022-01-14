import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProdService } from './prod.service';
import { Prod } from '@prisma/client';
import { CreateProdDto } from './dto/create-prod.dto';
import { CreateManyProdDto } from './dto/create-many-prod.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('prod')
@Controller('prod')
export class ProdController {
  constructor(private service: ProdService) {}

  @Post('create')
  @ApiOperation({
    summary: 'Criar um produto',
  })
  create(@Body() data: CreateProdDto): Promise<Prod> {
    return this.service.create(data);
  }

  @Post('createMany')
  @ApiOperation({
    summary: 'Criar vários produtos',
  })
  async createMany(@Body() data: CreateManyProdDto) {
    return this.service.createMany(data);
  }

  @Get('findMany')
  @ApiOperation({
    summary: 'Listar todos os produtos cadastrados',
  })
  findMany(): Promise<Prod[]> {
    return this.service.findMany();
  }

  @Get('find/:id')
  @ApiOperation({
    summary: 'Procurar um produto pelo ID',
  })
  async findUnique(@Param('id') id: string): Promise<Prod> {
    return this.service.findUnique(id);
  }
}
