import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  user: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}