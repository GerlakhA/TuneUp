import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FavoriteDto } from './dto/favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(private prisma: PrismaService) {}

  getAll(userId: string) {
    return this.prisma.favorite.findMany({
      where: { userId },
    });
  }

  async create(dto: FavoriteDto) {
    return this.prisma.favorite.create({
      data: {
        isFavorite: dto.isFavorite,
        ...dto,
      },
    });
  }

  delete(id: string) {
    return this.prisma.favorite.delete({
      where: { id },
    });
  }
}
