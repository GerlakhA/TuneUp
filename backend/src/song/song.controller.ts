import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { SongDto } from './dto/song.dto';
import { SongService } from './song.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @HttpCode(200)
  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: string) {
    return this.songService.getAll(userId);
  }

  @HttpCode(200)
  @Get(':id')
  @Auth()
  async getSongById(@Param('id') id: string) {
    return this.songService.getSongById(id);
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @HttpCode(200)
  @Post()
  async create(@Body() dto: SongDto, @CurrentUser('id') userId: string) {
    return this.songService.create(dto, userId);
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.songService.delete(id);
  }

  @HttpCode(200)
  @Patch('/favorite-true/:id')
  @Auth()
  async updateFavoriteTrue(
    @CurrentUser('id') id: string,
    @Param('id') songId: string,
  ) {
    return this.songService.updateFavoriteTrue(id, songId);
  }

  @HttpCode(200)
  @Patch('/favorite-false/:id')
  @Auth()
  async updateFavoriteFalse(
    @CurrentUser('id') id: string,
    @Param('id') songId: string,
  ) {
    return this.songService.updateFavoriteFalse(id, songId);
  }
}
