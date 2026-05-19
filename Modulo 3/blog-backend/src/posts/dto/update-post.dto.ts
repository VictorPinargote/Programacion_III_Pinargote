import { IsString, IsUUID } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  title?: string;

  @IsString()
  content?: string;

  @IsUUID()
  categoryId?: string;
}
