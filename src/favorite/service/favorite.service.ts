import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { AuthService } from 'src/auth/service/auth.service';
import { StoreService } from 'src/store/service/store.service';
import { Users } from 'src/user/model/user.entity';
import { Repository } from 'typeorm';
import { CreateFavoriteDTO } from '../dto/favorite.create.dto';
import { Favorite } from '../model/favorite.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorite)
    private readonly favoriteRepository: Repository<Favorite>,
    private readonly authService: AuthService,
    private readonly storeService: StoreService,
  ) {}

  //** 찜한 내역 보기 */
  async findFavorite(user: Users) {
    const { id } = user;

    const favorite = await this.favoriteRepository.find({
      relations: { Store: true },
      where: { User: { id } },
    });

    return favorite;
  }

  //** 찜하기 */
  async createFavorite(body: CreateFavoriteDTO) {
    const { userId, storeId } = body;

    await this.authService.findUserById(userId);
    await this.storeService.findStoreById(storeId);

    const favoriteInfo = {
      User: userId,
      Store: storeId,
    };
    const createFavorite = plainToInstance(Favorite, favoriteInfo);
    const favorite = await this.favoriteRepository.save(createFavorite);

    return favorite;
  }

  //** 찜한 상품 삭제 */
  async deleteFavorite(user: Users) {
    return '찜한 상품 삭제';
  }
}