// NestJS
import { ConfigModule } from '@nestjs/config';
// Modules
import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
// Controllers
import { AppController } from './app.controller';
// Services
import { AppService } from './app.service';

// Env
import config from './app.config';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
    }),
    FavoriteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
