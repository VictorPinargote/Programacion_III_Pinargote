import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from '../categories/categories.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  title?: string;

  @Column('text')
  content?: string;

  @ManyToOne(() => Category, { eager: false })
  category?: Category;
}