import { Injectable, InternalServerErrorException } from '@nestjs/common';
// Mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// Entities
import { FavoriteImage } from '../../models/image.entity';
// Dtos
import { CreateFavoriteImageDto } from '../../models/image.dto';

@Injectable()
export class ImageService {
  constructor(
    @InjectModel(FavoriteImage.name)
    private favoriteImageService: Model<FavoriteImage>,
  ) {}

  async getAll() {
    try {
      return await this.favoriteImageService.find();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async create(payload: CreateFavoriteImageDto) {
    try {
      const uploadImage = new this.favoriteImageService(payload);
      await uploadImage.save();
      return uploadImage;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async delete(id: string) {
    try {
      const favoriteImage = await this.favoriteImageService.findByIdAndDelete({
        _id: id,
      });
      return favoriteImage;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
