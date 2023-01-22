import { BannerService } from '../services/banner.service';
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    getAllActiveBanners(): Promise<{
        data: import("../models/banner.entity").BannerEntity[];
        status: boolean;
        message: string;
    }>;
}
