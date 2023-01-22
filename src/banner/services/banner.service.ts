import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BannerEntity } from '../models/banner.entity';

@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(BannerEntity)
    private readonly bannerRepository: Repository<BannerEntity>,
  ) {}

  getAllActiveBanners() {
    const listActiveBanners = this.bannerRepository.findBy({ is_active: true });
    return listActiveBanners;
  }
}
