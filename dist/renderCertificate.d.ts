import { IAchievementItem, IKollegeItem, IUserItem } from "./interface";
export declare function renderCertificate(data: {
    user: IUserItem;
    kollegeInfo: IKollegeItem;
    achievementInfo: IAchievementItem;
    type?: "badge" | "certificate";
}): Promise<string>;
