import { Repository } from 'typeorm';
import { BannerEntity } from '../models/banner.entity';
export declare class BannerService {
    private readonly bannerRepository;
    constructor(bannerRepository: Repository<BannerEntity>);
    getAllActiveBanners(): Promise<BannerEntity[]>;
}
