"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const banner_service_1 = require("../services/banner.service");
let BannerController = class BannerController {
    constructor(bannerService) {
        this.bannerService = bannerService;
    }
    async getAllActiveBanners() {
        try {
            const listActiveBanners = await this.bannerService.getAllActiveBanners();
            return {
                data: listActiveBanners,
                status: true,
                message: 'All active banners list',
            };
        }
        catch (error) {
            return {
                data: null,
                status: false,
                message: 'An error occured while fetching all active banners list',
            };
        }
    }
};
__decorate([
    (0, common_1.Get)('/active_banners'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active_banners' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'All active_banners',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal Server Error',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "getAllActiveBanners", null);
BannerController = __decorate([
    (0, swagger_1.ApiTags)('Banners Module'),
    (0, common_1.Controller)('banner'),
    __metadata("design:paramtypes", [banner_service_1.BannerService])
], BannerController);
exports.BannerController = BannerController;
//# sourceMappingURL=banner.controller.js.map