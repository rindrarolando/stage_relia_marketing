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
exports.BannerEntity = void 0;
const typeorm_1 = require("typeorm");
let BannerEntity = class BannerEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", typeorm_1.ObjectID)
], BannerEntity.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)('name'),
    __metadata("design:type", String)
], BannerEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('description'),
    __metadata("design:type", String)
], BannerEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('url'),
    __metadata("design:type", String)
], BannerEntity.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)('image_path'),
    __metadata("design:type", String)
], BannerEntity.prototype, "image_path", void 0);
__decorate([
    (0, typeorm_1.Column)('is_active'),
    __metadata("design:type", Boolean)
], BannerEntity.prototype, "is_active", void 0);
BannerEntity = __decorate([
    (0, typeorm_1.Entity)('banners')
], BannerEntity);
exports.BannerEntity = BannerEntity;
//# sourceMappingURL=banner.entity.js.map