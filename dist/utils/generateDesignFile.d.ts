import { IAchievementDesignItem, DesignOptions } from "../interface";
export declare function generateDesignFile(data: IAchievementDesignItem, options?: DesignOptions): Promise<{
    base64: string;
    contentType: string;
    buffer?: undefined;
    fileName?: undefined;
} | {
    buffer: Uint8Array;
    contentType: string;
    fileName: string;
    base64?: undefined;
}>;
