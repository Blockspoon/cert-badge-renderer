"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BadgeType1_1 = require("./BadgeType1");
const BadgeType2_1 = require("./BadgeType2");
const BadgeType3_1 = require("./BadgeType3");
const BadgeType4_1 = require("./BadgeType4");
const BadgeType5_1 = require("./BadgeType5");
const BadgeType7_1 = require("./BadgeType7");
const Badges = {
    BadgeType1: BadgeType1_1.createBadgeType1,
    BadgeType2: BadgeType2_1.createBadgeType2,
    BadgeType3: BadgeType3_1.createBadgeType3,
    BadgeType4: BadgeType4_1.createBadgeType4,
    BadgeType5: BadgeType5_1.createBadgeType5,
    BadgeType7: BadgeType7_1.createBadgeType7,
};
exports.default = Badges;
