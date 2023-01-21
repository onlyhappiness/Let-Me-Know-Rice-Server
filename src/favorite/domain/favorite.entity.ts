import { Store } from 'src/store/domain/store.entity';
import { User } from 'src/user/domain/user.entity';
import {
  CreateDateColumn,
  Entity,
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

  // 유저 id
  @ManyToOne(() => User, (user) => user.id, {})
  User: User;

  // 가게 id
  @ManyToOne(() => Store, (store) => store.id, {})
  Store: Store;
}
