import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  
  @IsNotEmpty()
  @IsString()
  username?: string;

  @IsString()
  @IsNotEmpty()
  password?: string;
}