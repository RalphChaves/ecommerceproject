import { Module } from '@nestjs/common';
import { ProdService } from './prod.service';
import { ProdController } from './prod.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProdController],
  providers: [ProdService, PrismaService],
})
export class ProdModule {}
