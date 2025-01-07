import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { FavoriteDto } from './dto/favorite.dto';
import { FavoriteService } from './favorite.service';

@Controller('favorites')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: string) {
    return this.favoriteService.getAll(userId);
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @HttpCode(200)
  @Post()
  async create(@Body() dto: FavoriteDto) {
    return this.favoriteService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.favoriteService.delete(id);
  }
}
