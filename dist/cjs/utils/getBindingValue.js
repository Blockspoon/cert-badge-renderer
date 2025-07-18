"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBindingValue = void 0;
const date_fns_1 = require("date-fns");
const util_js_1 = require("../util.js");
// 데이터 타입별 헬퍼 함수
const getAchievementValue = (bindingKey, achievementInfo) => {
    if (!achievementInfo)
        return null;
    const { tags } = achievementInfo.achievementForm || {};
    switch (bindingKey) {
        case "period":
            return achievementInfo.course_begin_at && achievementInfo.course_end_at
                ? `${(0, date_fns_1.format)(new Date(achievementInfo.course_begin_at), "yyyy.MM.dd")} ~ ${(0, date_fns_1.format)(new Date(achievementInfo.course_end_at), "yyyy.MM.dd")}`
                : "-";
        case "created_at":
            return (0, date_fns_1.format)(new Date(achievementInfo.created_at), "yyyy.MM.dd");
        case "certificate_number":
            return achievementInfo.certificate_number || "";
        case "tags":
            return tags?.length ? tags.map((tag) => `#${tag}`).join(" ") : null;
        case "qr_code":
            return `https://kolleges.net/ko/${`test`}/achievement/${achievementInfo.id}`;
        case "badge":
            return achievementInfo;
        case "expiration_date":
            return achievementInfo.expiration_date || "";
        default:
            return achievementInfo.achievementForm?.[bindingKey] || null;
    }
};
const getUserValue = (bindingKey, user) => {
    return bindingKey === "name"
        ? user?.name || "홍길동"
        : user?.[bindingKey] || null;
};
const getClubValue = (bindingKey, kollegeInfo, achievementInfo) => {
    if (!kollegeInfo)
        return null;
    let achievementForm;
    if (achievementInfo.achievementForm) {
        achievementForm = achievementInfo.achievementForm;
    }
    else {
        achievementForm = achievementInfo;
    }
    if (bindingKey.startsWith("name_")) {
        const index = Number(bindingKey.split("_")[1]) - 1;
        return achievementForm?.clubInstitutions?.[index]?.name || "";
    }
    if (["sign_image_1", "sign_image_2", "club_symbol_1", "club_symbol_2"].includes(bindingKey)) {
        const index = bindingKey.endsWith("1") ? 0 : 1;
        const imageKey = bindingKey.includes("sign_image")
            ? "sign_image"
            : "club_symbol";
        return achievementForm.clubInstitutions?.[index]?.images
            ? (0, util_js_1.groupByType)(achievementForm.clubInstitutions[index].images)[imageKey]?.[0]?.path
            : null;
    }
    if (["club_logo", "sign_image", "club_symbol"].includes(bindingKey)) {
        if (achievementForm.representativeInstitution) {
            const groupByTypeImages = (0, util_js_1.groupByType)(achievementForm.representativeInstitution.images);
            return (groupByTypeImages[bindingKey]?.[0]
                ?.path || null);
        }
        const groupByTypeImages = (0, util_js_1.groupByType)(kollegeInfo.images);
        return (groupByTypeImages[bindingKey]?.[0]
            ?.path || null);
    }
    if (bindingKey === "name" && achievementForm.representativeInstitution) {
        return achievementForm.representativeInstitution?.name;
    }
    return kollegeInfo?.[bindingKey] || null;
};
const getCustomValue = (bindingKey, achievementInfo) => {
    if (!achievementInfo?.customAttributes)
        return null;
    return (achievementInfo.customAttributes.find((attr) => [`custom_${attr.attribute_tag}`, `custom-${attr.attribute_tag}`].includes(bindingKey))?.attribute_value || null);
};
// 🔥 메인 함수: 데이터 타입별로 자동 호출하도록 변경!
const getBindingValue = (type, bindingKey, data) => {
    switch (type) {
        case "achievement":
            return getAchievementValue(bindingKey, data);
        case "user":
            return getUserValue(bindingKey, data.user);
        case "club":
            return getClubValue(bindingKey, data?.achievementForm?.club || data?.club, data);
        case "custom":
            return getCustomValue(bindingKey, data);
        default:
            return null;
    }
};
exports.getBindingValue = getBindingValue;
