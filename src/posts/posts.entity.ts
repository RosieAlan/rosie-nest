//    posts/posts.entity.ts
import { Column, Entity, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity('posts')
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  @Column({ length: 50 })
  title: string;

  @Column({ length: 20 })
  author: string;

  @Column('text')
  content: string;

  @Column({ default: '' })
  thumb_url: string;

  @Column('tinyint')
  type: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;

//   // 作者
//   @ManyToOne((type) => User, (user) => user.nickname)
//   author: User;
}
