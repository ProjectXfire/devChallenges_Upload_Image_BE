import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateFavoriteImageDto {
  @IsObject()
  @IsNotEmpty()
  readonly imageProperties: any;
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly image: string;
}
