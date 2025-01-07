import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class SongDto {
  @IsString()
  name: string;

  @IsString()
  author: string;

  @IsString()
  @IsOptional()
  imgUrl?: string;

  @IsString()
  @IsOptional()
  song_path?: string;

  @IsBoolean()
  @IsOptional()
  isFavorite?: boolean;
}
