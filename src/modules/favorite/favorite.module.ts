import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// Controllers
import { ImageController } from './controllers/image/image.controller';
// Services
import { ImageService } from './services/image/image.service';
// Entities
import { FavoriteImage, FavoriteImageSchema } from './models/image.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FavoriteImage.name, schema: FavoriteImageSchema },
    ]),
  ],
  controllers: [ImageController],
  providers: [ImageService],
})
export class FavoriteModule {}
