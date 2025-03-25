import { IAchievementItem, IKollegeItem, IUserItem } from "./interface";
interface GenerateCertificateFileParams {
    user: IUserItem;
    kollegeInfo: IKollegeItem;
    achievementInfo: IAchievementItem;
    elements: any[];
    format: "pdf" | "png";
    qrCodeData?: string;
}
export declare function generateCertificateFile({ user, kollegeInfo, achievementInfo, elements, format, qrCodeData }: GenerateCertificateFileParams): Promise<Buffer>;
export {};
