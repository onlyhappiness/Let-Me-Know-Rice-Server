import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';
import { FavoriteModule } from './favorite/favorite.module';
import { StoreModule } from './store/store.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [UserModule, MenuModule, FavoriteModule, StoreModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
