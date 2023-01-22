import { Column, Entity, ObjectID, PrimaryGeneratedColumn } from 'typeorm';

@Entity('banners')
export class BannerEntity {
  @PrimaryGeneratedColumn()
  _id: ObjectID;

  @Column('name')
  name: string;

  @Column('description')
  description: string;

  @Column('url')
  url: string;

  @Column('image_path')
  image_path: string;

  @Column('is_active')
  is_active: boolean;
}
