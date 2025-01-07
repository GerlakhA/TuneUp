import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  email: string;

  @IsString()
  password: string;
}
