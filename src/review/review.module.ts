import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { MenuModule } from 'src/menu/menu.module';
import { StoreModule } from 'src/store/store.module';
import { ReviewController } from './controller/review.controller';
import { Review } from './model/review.entity';
import { ReviewService } from './service/review.service';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Review]),
    AuthModule,
    StoreModule,
    MenuModule,
    UploadModule,
  ],
  providers: [ReviewService],
  controllers: [ReviewController],
  exports: [ReviewService, ReviewModule],
})
export class ReviewModule {}
