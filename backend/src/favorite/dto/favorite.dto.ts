import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class FavoriteDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  author: string;

  @IsString()
  @IsOptional()
  imgUrl?: string;

  @IsString()
  song_path: string;

  @IsBoolean()
  @IsOptional()
  isFavorite?: boolean;
}
