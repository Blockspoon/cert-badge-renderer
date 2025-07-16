import { format } from "date-fns";
import { groupByType } from "../util.js";
// 데이터 타입별 헬퍼 함수
const getAchievementValue = (bindingKey, achievementInfo) => {
    var _a;
    if (!achievementInfo)
        return null;
    const { tags } = achievementInfo.achievementForm || {};
    switch (bindingKey) {
        case "period":
            return achievementInfo.course_begin_at && achievementInfo.course_end_at
                ? `${format(new Date(achievementInfo.course_begin_at), "yyyy.MM.dd")} ~ ${format(new Date(achievementInfo.course_end_at), "yyyy.MM.dd")}`
                : "-";
        case "created_at":
            return format(new Date(achievementInfo.created_at), "yyyy.MM.dd");
        case "certificate_number":
            return achievementInfo.certificate_number || "";
        case "tags":
            return (tags === null || tags === void 0 ? void 0 : tags.length) ? tags.map((tag) => `#${tag}`).join(" ") : null;
        case "qr_code":
            return `https://kolleges.net/ko/${`test`}/achievement/${achievementInfo.id}`;
        case "badge":
            return achievementInfo;
        case "expiration_date":
            return achievementInfo.expiration_date || "";
        default:
            return ((_a = achievementInfo.achievementForm) === null || _a === void 0 ? void 0 : _a[bindingKey]) || null;
    }
};
const getUserValue = (bindingKey, user) => {
    return bindingKey === "name"
        ? (user === null || user === void 0 ? void 0 : user.name) || "홍길동"
        : (user === null || user === void 0 ? void 0 : user[bindingKey]) || null;
};
const getClubValue = (bindingKey, kollegeInfo, achievementInfo) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
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
        return ((_b = (_a = achievementForm === null || achievementForm === void 0 ? void 0 : achievementForm.clubInstitutions) === null || _a === void 0 ? void 0 : _a[index]) === null || _b === void 0 ? void 0 : _b.name) || "";
    }
    if (["sign_image_1", "sign_image_2", "club_symbol_1", "club_symbol_2"].includes(bindingKey)) {
        const index = bindingKey.endsWith("1") ? 0 : 1;
        const imageKey = bindingKey.includes("sign_image")
            ? "sign_image"
            : "club_symbol";
        return ((_d = (_c = achievementForm.clubInstitutions) === null || _c === void 0 ? void 0 : _c[index]) === null || _d === void 0 ? void 0 : _d.images)
            ? (_f = (_e = groupByType(achievementForm.clubInstitutions[index].images)[imageKey]) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.path
            : null;
    }
    if (["club_logo", "sign_image", "club_symbol"].includes(bindingKey)) {
        if (achievementForm.representativeInstitution) {
            const groupByTypeImages = groupByType(achievementForm.representativeInstitution.images);
            return (((_h = (_g = groupByTypeImages[bindingKey]) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.path) || null);
        }
        const groupByTypeImages = groupByType(kollegeInfo.images);
        return (((_k = (_j = groupByTypeImages[bindingKey]) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.path) || null);
    }
    if (bindingKey === "name" && achievementForm.representativeInstitution) {
        return (_l = achievementForm.representativeInstitution) === null || _l === void 0 ? void 0 : _l.name;
    }
    return (kollegeInfo === null || kollegeInfo === void 0 ? void 0 : kollegeInfo[bindingKey]) || null;
};
const getCustomValue = (bindingKey, achievementInfo) => {
    var _a;
    if (!(achievementInfo === null || achievementInfo === void 0 ? void 0 : achievementInfo.customAttributes))
        return null;
    return (((_a = achievementInfo.customAttributes.find((attr) => [`custom_${attr.attribute_tag}`, `custom-${attr.attribute_tag}`].includes(bindingKey))) === null || _a === void 0 ? void 0 : _a.attribute_value) || null);
};
// 🔥 메인 함수: 데이터 타입별로 자동 호출하도록 변경!
export const getBindingValue = (type, bindingKey, data) => {
    var _a;
    switch (type) {
        case "achievement":
            return getAchievementValue(bindingKey, data);
        case "user":
            return getUserValue(bindingKey, data.user);
        case "club":
            return getClubValue(bindingKey, ((_a = data === null || data === void 0 ? void 0 : data.achievementForm) === null || _a === void 0 ? void 0 : _a.club) || (data === null || data === void 0 ? void 0 : data.club), data);
        case "custom":
            return getCustomValue(bindingKey, data);
        default:
            return null;
    }
};
