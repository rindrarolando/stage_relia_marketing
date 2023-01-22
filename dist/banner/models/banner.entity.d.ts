import { ObjectID } from 'typeorm';
export declare class BannerEntity {
    _id: ObjectID;
    name: string;
    description: string;
    url: string;
    image_path: string;
    is_active: boolean;
}
