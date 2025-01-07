import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SongDto } from './dto/song.dto';

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) {}

  getAll(userId: string) {
    return this.prisma.song.findMany({
      where: { userId },
    });
  }

  getSongById(id: string) {
    return this.prisma.song.findUnique({
      where: { id },
    });
  }

  async create(dto: SongDto, userId: string) {
    if (!dto.name || !dto.author || !dto.song_path) {
      throw new Error('Недостаточно данных для создания песни');
    }

    return this.prisma.song.create({
      data: {
        isFavorite: false,
        ...dto,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  delete(id: string) {
    return this.prisma.song.delete({
      where: { id },
    });
  }

  updateFavoriteTrue(userId: string, songId: string) {
    return this.prisma.song.update({
      where: { userId, id: songId },
      data: {
        isFavorite: {
          set: true,
        },
      },
    });
  }

  updateFavoriteFalse(userId: string, songId: string) {
    return this.prisma.song.update({
      where: { userId, id: songId },
      data: {
        isFavorite: {
          set: false,
        },
      },
    });
  }
}
