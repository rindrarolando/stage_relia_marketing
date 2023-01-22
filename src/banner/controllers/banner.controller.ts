import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BannerService } from '../services/banner.service';

@ApiTags('Banners Module')
@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get('/active_banners')
  @ApiOperation({ summary: 'Get all active_banners' })
  @ApiResponse({
    status: 200,
    description: 'All active_banners',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  async getAllActiveBanners() {
    try {
      const listActiveBanners = await this.bannerService.getAllActiveBanners();
      return {
        data: listActiveBanners,
        status: true,
        message: 'All active banners list',
      };
    } catch (error) {
      return {
        data: null,
        status: false,
        message: 'An error occured while fetching all active banners list',
      };
    }
  }
}
