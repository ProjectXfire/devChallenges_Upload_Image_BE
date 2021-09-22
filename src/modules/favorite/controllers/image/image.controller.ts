import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
// Services
import { ImageService } from '../../services/image/image.service';
// Dtos
import { CreateFavoriteImageDto } from '../../models/image.dto';

@Controller('api/image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get('list')
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.imageService.getAll();
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateFavoriteImageDto) {
    return this.imageService.create(payload);
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.imageService.delete(id);
  }
}
