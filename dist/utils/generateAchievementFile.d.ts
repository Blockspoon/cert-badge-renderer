import { CertificateData, CertificateOptions } from "../interface";
export declare function generateAchievementFile(data: CertificateData, options?: CertificateOptions): Promise<{
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
