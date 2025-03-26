import { IAchievementItem, IKollegeItem, IUserItem } from "./interface";
export declare function renderCertificate(data: {
    user: IUserItem;
    kollegeInfo: IKollegeItem;
    achievementInfo: IAchievementItem;
    type?: "badge" | "certificate";
    size?: number;
    noSpace?: boolean;
}): Promise<string>;
