import { IsNotEmpty, IsNumber } from 'class-validator';
import { Store } from 'src/store/model/store.entity';
import { User } from 'src/user/model/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'favorite' })
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @IsNotEmpty()
  // @IsNumber()
  // @Column()
  // userId: number;

  // @IsNotEmpty()
  // @IsNumber()
  // @Column()
  // storeId: number;

  // 유저
  @ManyToOne(() => User, (user) => user.Favorite, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  User: User;

  // 가게
  @ManyToOne(() => Store, (store) => store.Favorite, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'storeId', referencedColumnName: 'id' })
  Store: Store;
}
