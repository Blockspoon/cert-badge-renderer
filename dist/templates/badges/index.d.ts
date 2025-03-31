import { createBadgeType1 } from "./BadgeType1";
import { createBadgeType2 } from "./BadgeType2";
import { createBadgeType3 } from "./BadgeType3";
import { createBadgeType4 } from "./BadgeType4";
import { createBadgeType5 } from "./BadgeType5";
import { createBadgeType7 } from "./BadgeType7";
declare const Badges: {
    BadgeType1: typeof createBadgeType1;
    BadgeType2: typeof createBadgeType2;
    BadgeType3: typeof createBadgeType3;
    BadgeType4: typeof createBadgeType4;
    BadgeType5: typeof createBadgeType5;
    BadgeType7: typeof createBadgeType7;
};
export default Badges;
