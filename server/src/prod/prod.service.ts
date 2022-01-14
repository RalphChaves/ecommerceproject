import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProdDto } from './dto/create-prod.dto';
import { CreateManyProdDto } from './dto/create-many-prod.dto';
import { Prod } from '@prisma/client';

@Injectable()
export class ProdService {
  constructor(private database: PrismaService) {}

  async create(data: CreateProdDto): Promise<Prod> {
    const prod = await this.database.prod.create({
      data,
    });
    return prod;
  }

  async createMany(data: CreateManyProdDto) {
    const createdProd = [];

    data.prod.map(async (prod) => {
      const prodExist = await this.findPerName(prod.name);

      if (!prodExist) {
        const created = await this.create(prod);
        createdProd.push(created);
      }
    });

    return createdProd;
  }

  async findPerName(name: string): Promise<Prod> {
    const prod = await this.database.prod.findFirst({
      where: { name: name },
    });
    return prod;
  }

  async findMany(): Promise<Prod[]> {
    const prod = await this.database.prod.findMany();
    return prod;
  }

  async findUnique(id: string): Promise<Prod> {
    const prod = await this.database.prod.findUnique({
      where: { id },
    });

    if (!prod) {
      throw new NotFoundException('ID não encontrado');
    }

    return prod;
  }
}
