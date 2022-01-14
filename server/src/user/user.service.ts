import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private database: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const emailOrNickExists = await this.database.user.findFirst({
      where: {
        OR: [
          {
            email: data.email,
          },
          {
            nickname: data.nickname,
          },
        ],
      },
    });

    if (emailOrNickExists) {
      throw new ConflictException('Email ou nickname já cadastrados');
    }

    if (data.password !== data.passwordConfirmation) {
      throw new ConflictException('Senhas não conferem');
    }

    delete data.passwordConfirmation;

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.database.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    delete user.password;
    return user;
  }

  async userList(userId: string) {
    const prod = await this.database.user.findUnique({
      where: { id: userId },
      include: {
        prod: true,
      },
    });
    return prod;
  }

  async addList(user: User, prodId: string) {
    const prod = await this.database.prod.findUnique({
      where: { id: prodId },
    });

    if (!prod) {
      throw new NotFoundException('Produto não encontrado');
    }

    const userLikedProd = await this.database.user.findUnique({
      where: { id: user.id },
      include: {
        prod: true,
      },
    });

    const userProdList = userLikedProd.prod;
    let foundProd = false;

    userProdList.map((prod) => {
      if (prod.id === prodId) {
        foundProd = true;
      }
    });

    if (foundProd) {
      await this.database.user.update({
        where: { id: user.id },
        data: {
          prod: {
            disconnect: {
              id: prod.id,
            },
          },
        },
      });
      return { message: 'Produto removido da lista ' };
    } else {
      await this.database.user.update({
        where: { id: user.id },
        data: {
          prod: {
            connect: {
              id: prod.id,
            },
          },
        },
      });
      return { message: 'Produto adicionado na lista' };
    }
  }
}
