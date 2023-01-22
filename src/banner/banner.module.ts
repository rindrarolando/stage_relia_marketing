import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerController } from './controllers/banner.controller';
import { BannerEntity } from './models/banner.entity';
import { BannerService } from './services/banner.service';

@Module({
  imports: [TypeOrmModule.forFeature([BannerEntity])],
  providers: [BannerService],
  controllers: [BannerController],
  exports: [BannerService],
})
export class BannerModule {}
