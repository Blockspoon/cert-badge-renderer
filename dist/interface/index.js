"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CERTIFICATE_DESIGN_TYPE = exports.PayMethod = exports.AvatarTypeEng = exports.AvatarType = exports.DesignType = exports.SectionType = exports.PRICE_TYPE = exports.ACHIEVEMENT_IMAGES = exports.NOTIFICATION_TYPE = exports.ROLE_TYPE = exports.KOLLEGE_JOIN_STATUS = exports.KOLLEGE_TYPE = void 0;
var KOLLEGE_TYPE;
(function (KOLLEGE_TYPE) {
    KOLLEGE_TYPE["COMMUNITY"] = "community";
    KOLLEGE_TYPE["COMPANY"] = "company";
    KOLLEGE_TYPE["SCHOOL"] = "school";
    KOLLEGE_TYPE["AUTHORITY"] = "authority";
})(KOLLEGE_TYPE || (exports.KOLLEGE_TYPE = KOLLEGE_TYPE = {}));
var KOLLEGE_JOIN_STATUS;
(function (KOLLEGE_JOIN_STATUS) {
    KOLLEGE_JOIN_STATUS["AUTO_APPROVAL"] = "auto_approval";
    KOLLEGE_JOIN_STATUS["MANUAL_APPROVAL"] = "manual_approval";
})(KOLLEGE_JOIN_STATUS || (exports.KOLLEGE_JOIN_STATUS = KOLLEGE_JOIN_STATUS = {}));
var ROLE_TYPE;
(function (ROLE_TYPE) {
    ROLE_TYPE["ADMIN"] = "admin";
    ROLE_TYPE["CLIENT"] = "client";
    ROLE_TYPE["MEMBER"] = "member";
})(ROLE_TYPE || (exports.ROLE_TYPE = ROLE_TYPE = {}));
var NOTIFICATION_TYPE;
(function (NOTIFICATION_TYPE) {
    NOTIFICATION_TYPE["JOIN_REQUEST"] = "JOIN_REQUEST";
    NOTIFICATION_TYPE["JOIN_REQUEST_REJECTED"] = "JOIN_REQUEST_REJECTED";
    NOTIFICATION_TYPE["USER_INVITED"] = "USER_INVITED";
    NOTIFICATION_TYPE["CHALLENGE_JOINED"] = "CHALLENGE_JOINED";
    NOTIFICATION_TYPE["ACHIEVEMENT_ISSUED"] = "ACHIEVEMENT_ISSUED";
})(NOTIFICATION_TYPE || (exports.NOTIFICATION_TYPE = NOTIFICATION_TYPE = {}));
var ACHIEVEMENT_IMAGES;
(function (ACHIEVEMENT_IMAGES) {
    ACHIEVEMENT_IMAGES["ACHIEVEMENT_FORM"] = "achievement_form";
    ACHIEVEMENT_IMAGES["BADGE_IMAGE"] = "badge_image";
    // AVATAR_IMAGE = "avatar_image",
})(ACHIEVEMENT_IMAGES || (exports.ACHIEVEMENT_IMAGES = ACHIEVEMENT_IMAGES = {}));
var PRICE_TYPE;
(function (PRICE_TYPE) {
    PRICE_TYPE["FREE"] = "free";
    PRICE_TYPE["PAID"] = "paid";
})(PRICE_TYPE || (exports.PRICE_TYPE = PRICE_TYPE = {}));
var SectionType;
(function (SectionType) {
    SectionType["PROMOTIONAL_VIDEO"] = "promotional_video";
    SectionType["REPRESENTATIVE_CLASS"] = "representative_class";
    SectionType["NOTICE"] = "notice";
    SectionType["BANNER"] = "banner";
    SectionType["ACTION"] = "action";
})(SectionType || (exports.SectionType = SectionType = {}));
var DesignType;
(function (DesignType) {
    // 배너
    DesignType["MAIN_BANNER_1"] = "main_banner_1";
    DesignType["MAIN_BANNER_2"] = "main_banner_2";
    DesignType["DETAIL_INFO_1"] = "detail_info_1";
    DesignType["DETAIL_INFO_2"] = "detail_info_2";
    DesignType["SUB_BANNER_1"] = "sub_banner_1";
    DesignType["PC_BANNER_1"] = "pc_banner_1";
    DesignType["MOBILE_BANNER_1"] = "mobile_banner_1";
    // 클래스
    DesignType["CLASSES_1"] = "classes_1";
    DesignType["CLASSES_2"] = "classes_2";
    // 버튼
    DesignType["BUTTON_1"] = "button_1";
    DesignType["BUTTON_2"] = "button_2";
    DesignType["BUTTON_3"] = "button_3";
})(DesignType || (exports.DesignType = DesignType = {}));
var AvatarType;
(function (AvatarType) {
    AvatarType["BACKGROUND"] = "\uBC30\uACBD";
    AvatarType["CLOTHES"] = "\uC758\uC0C1";
    AvatarType["FACE"] = "\uC5BC\uAD74";
    AvatarType["EYES"] = "\uB208";
    AvatarType["HAIR"] = "\uD5E4\uC5B4";
    AvatarType["MOUTH"] = "\uC785";
    AvatarType["ACCESSORY"] = "\uC561\uC138\uC11C\uB9AC";
})(AvatarType || (exports.AvatarType = AvatarType = {}));
var AvatarTypeEng;
(function (AvatarTypeEng) {
    AvatarTypeEng["FACE"] = "face";
    AvatarTypeEng["HAIR"] = "hair";
    AvatarTypeEng["EYES"] = "eyes";
    AvatarTypeEng["MOUTH"] = "mouth";
    AvatarTypeEng["CLOTHES"] = "clothes";
    AvatarTypeEng["ACCESSORY"] = "accessory";
    AvatarTypeEng["BACKGROUND"] = "background";
})(AvatarTypeEng || (exports.AvatarTypeEng = AvatarTypeEng = {}));
// 결제
var PayMethod;
(function (PayMethod) {
    PayMethod["CARD"] = "CARD";
    PayMethod["BANK"] = "BANK";
    PayMethod["VBANK"] = "VBANK";
    PayMethod["CELLPHONE"] = "CELLPHONE";
    PayMethod["NAVER"] = "NAVER";
    PayMethod["KAKAO"] = "KAKAO";
    PayMethod["PAYCO"] = "PAYCO";
    PayMethod["LPAY"] = "LPAY";
    PayMethod["PINPAY"] = "PINPAY";
    PayMethod["SAMSUNGPAY"] = "SAMSUNGPAY";
    PayMethod["TOSS"] = "TOSS";
    PayMethod["LINEPAY"] = "LINEPAY";
    PayMethod["TMONEYPAY"] = "TMONEYPAY";
})(PayMethod || (exports.PayMethod = PayMethod = {}));
// 증명서 디자인
var CERTIFICATE_DESIGN_TYPE;
(function (CERTIFICATE_DESIGN_TYPE) {
    CERTIFICATE_DESIGN_TYPE["TEMPLATE"] = "template";
    CERTIFICATE_DESIGN_TYPE["BACKGROUND"] = "background";
    CERTIFICATE_DESIGN_TYPE["ICON"] = "icon";
    CERTIFICATE_DESIGN_TYPE["TEXT"] = "text";
    CERTIFICATE_DESIGN_TYPE["IMAGE"] = "image";
    CERTIFICATE_DESIGN_TYPE["PROPS"] = "props";
    CERTIFICATE_DESIGN_TYPE["RIBBON"] = "ribbon";
    CERTIFICATE_DESIGN_TYPE["BADGE"] = "badge";
})(CERTIFICATE_DESIGN_TYPE || (exports.CERTIFICATE_DESIGN_TYPE = CERTIFICATE_DESIGN_TYPE = {}));
