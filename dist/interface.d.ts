export interface IImageType {
    imageId: number;
    path: string;
    type: string;
    url: string;
    order?: number;
}
export interface IExtendedImageType extends IImageType {
    id: number;
}
export declare enum KOLLEGE_TYPE {
    COMMUNITY = "community",
    COMPANY = "company",
    SCHOOL = "school",
    AUTHORITY = "authority"
}
export declare enum KOLLEGE_JOIN_STATUS {
    AUTO_APPROVAL = "auto_approval",
    MANUAL_APPROVAL = "manual_approval"
}
export interface IKollegeItem {
    id: number;
    name: string;
    description: string;
    cover_image: string;
    logo_image: string;
    color_main: string;
    is_public: boolean;
    domain: string;
    type: KOLLEGE_TYPE;
    owner: IUserItem;
    email: string;
    updated_at: string;
    custom_domain?: string;
    survey_form_url?: string;
    images: {
        club_cover?: IImageType[];
        club_logo?: IImageType[];
        club_symbol?: IImageType[];
        path?: string;
    };
}
export interface INavigationItem {
    id: number;
    name: string;
    url: string;
    order: number;
    is_visible: boolean;
    external?: boolean;
    target?: "_self" | "_blank";
    children?: INavigationItem[];
}
export interface ITagItem {
    tagKey: string;
    tagName: string;
    order: number;
    is_visible: boolean;
    is_removable: boolean;
    pinnedTagKey: string | null | undefined;
}
export declare enum ROLE_TYPE {
    ADMIN = "admin",
    CLIENT = "client",
    MEMBER = "member"
}
export interface ICreateUser {
    email: string;
    password: string;
    name: string;
    referrerId?: number;
    rewardNotification?: boolean;
}
export interface IUserItem {
    id: number;
    email: string;
    name: string;
    description: string;
    last_login_at: string;
    verified: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: null;
    googleId: null;
    image?: string;
    avatar: string[];
    clubMemberId: number;
    profileImageType: "avatar" | "profile";
    achievement_id?: number;
    phoneNumber?: string;
    isPhoneVerified?: boolean;
    marketingConsent?: boolean;
}
export interface INotificateItem {
    title: string;
    createdAt: string;
    id: number;
    domain: string;
    isRead: boolean;
    message: string;
    images: any;
    relatedId?: number;
    type: NOTIFICATION_TYPE;
}
export declare enum NOTIFICATION_TYPE {
    JOIN_REQUEST = "JOIN_REQUEST",// 가입 요청
    JOIN_REQUEST_REJECTED = "JOIN_REQUEST_REJECTED",// 가입 요청 거절
    USER_INVITED = "USER_INVITED",// 초대
    CHALLENGE_JOINED = "CHALLENGE_JOINED",// 챌린지 참가
    ACHIEVEMENT_ISSUED = "ACHIEVEMENT_ISSUED"
}
export interface IAchievementFormItem {
    achievementCertificateDesign?: IAchievementDesignItem;
    achievementBadgeDesign?: IAchievementDesignItem;
    avatar_type?: AvatarType;
    challenge: IClassItem;
    club: {
        name: string;
        domain: string;
    };
    clubInstitutions: IOrganizationItem[];
    course_begin_at?: string;
    course_end_at?: string;
    created_at: string;
    description: string;
    id?: number;
    name: string;
    prefix?: string;
    program_type?: string;
    program_name?: string;
    program_url?: string;
    requirements?: any[];
    sort_order: number;
    standardScore?: number;
    tags: string[];
    type: string;
    updated_at: string;
    representativeInstitution?: any;
    representativeInstitutionId?: number;
    hasAchievements?: boolean;
}
export interface IAchievementItem {
    achievementForm: IAchievementFormItem;
    achievementFormId?: number;
    admin_comment?: string;
    attribute_tag?: string;
    attribute_value?: string;
    certificate_number?: string;
    cid?: any;
    course_begin_at?: string;
    course_end_at?: string;
    created_at: string;
    expiration_date?: string;
    id?: number;
    is_received?: boolean;
    issuance_route: {
        submissions: ISubmissionItem[];
        route: "automatic";
    } | "manual";
    level?: number;
    nft_token?: any;
    status?: string;
    user: IUserItem;
    customAttributes?: {
        attribute_tag: string;
        attribute_value: string;
    }[];
}
export interface IMemberItem {
    id: number;
    role: string;
    status: string;
    created_at: string;
    updated_at: string;
    user: IUserItem;
}
export interface IMemberInvite {
    name: string;
    email: string;
}
export interface ISimpleMemberItem {
    id: number;
    name: string;
    created_at: string;
    avatar: string[];
}
export interface ICertificateCreate {
    name: string;
    type: string;
    description: string;
    tags: string[];
    institutionIds: number[];
    avatar_image: File[] | null;
    badge_image: File[] | null;
    certificate_image: File[] | null;
    course_begin_at?: string;
    course_end_at?: string;
    program_type?: string;
    program_name?: string;
    program_url?: string;
    requirements?: any[];
}
export interface ICertificateCreate2 {
    name: string;
    type: string;
    description: string;
    tags: string[];
    representativeInstitutionId?: number;
    institutionIds: number[];
    avatar_image?: File[];
    badge_image?: File[];
    certificate_image?: File[];
    course_begin_at?: string;
    course_end_at?: string;
    program_type?: string;
    program_name?: string;
    program_url?: string;
    requirements?: any[];
    prefix?: string;
}
export interface IOrganizationCreate {
    type: "운영기관" | "민간기관" | "공공기관" | "커뮤니티";
    name: string;
    contact_person_name: string;
    contact_email: string;
    phone_number: string;
    website_url: string;
    club_symbol: File[] | undefined;
    sign_image: File[] | undefined;
    club_logo: File[] | undefined;
}
export interface IOrganizationItem {
    type: "운영기관" | "민간기관" | "공공기관" | "커뮤니티";
    name: string;
    id: number;
    images: any;
    contact_person_name: string;
    contact_email: string;
    phone_number: string;
    website_url: string;
}
export declare enum ACHIEVEMENT_IMAGES {
    ACHIEVEMENT_FORM = "achievement_form",
    BADGE_IMAGE = "badge_image"
}
export interface ICertificateCreate {
    name: string;
    type: string;
    description: string;
    tags: string[];
    club_name: string;
    achievement_form_symbol: File[] | null;
    sign_image: File[] | null;
    avatar_image: File[] | null;
    badge_image: File[] | null;
    certificate_image: File[] | null;
}
export interface IClassCreate {
    id?: number;
    is_public: boolean;
    title: string;
    description: string;
    tags: string[];
    course_begin_at: string;
    course_end_at: string;
    recruit_begin_at: string;
    recruit_end_at: string;
    created_at?: string;
    images?: any;
    survey_form_url?: string;
}
export interface IClassItem {
    id?: number;
    is_public: boolean;
    title: string;
    description: string;
    tags: string[];
    course_begin_at: string;
    course_end_at: string;
    recruit_begin_at: string;
    recruit_end_at: string;
    created_at?: string;
    images?: any;
    price: string;
    price_type: PRICE_TYPE;
    survey_form_url?: string;
}
export interface ISubmissionItem {
    id?: number;
    name: string;
    type: string;
    isEssential: boolean;
    isCompleted?: boolean;
    isSubmitted?: boolean;
    order: number;
    description?: string;
    flatform?: string;
    linkUrl?: string;
    duration?: string;
    begin_at?: string;
    end_at?: string;
    address?: string;
    challengeId?: number;
    submittedAt?: string;
}
export interface IFeedItem {
    id: number;
    title: string;
    description: string;
    images?: {
        feed_image: IExtendedImageType[];
    };
    tags: ITagItem[];
    commentCount: number;
    user: IUserItem;
    created_at: string;
    pinned_at: string;
    recipientId?: number;
    submissionName?: string;
    userId?: number;
    pinnedTagKey: string | null | undefined;
}
export declare enum PRICE_TYPE {
    FREE = "free",
    PAID = "paid"
}
export declare enum SectionType {
    PROMOTIONAL_VIDEO = "promotional_video",
    REPRESENTATIVE_CLASS = "representative_class",
    NOTICE = "notice",
    BANNER = "banner",
    ACTION = "action"
}
export declare enum DesignType {
    MAIN_BANNER_1 = "main_banner_1",
    MAIN_BANNER_2 = "main_banner_2",
    DETAIL_INFO_1 = "detail_info_1",
    DETAIL_INFO_2 = "detail_info_2",
    SUB_BANNER_1 = "sub_banner_1",
    PC_BANNER_1 = "pc_banner_1",
    MOBILE_BANNER_1 = "mobile_banner_1",
    CLASSES_1 = "classes_1",
    CLASSES_2 = "classes_2",
    BUTTON_1 = "button_1",
    BUTTON_2 = "button_2",
    BUTTON_3 = "button_3"
}
export declare enum AvatarType {
    BACKGROUND = "\uBC30\uACBD",
    CLOTHES = "\uC758\uC0C1",
    FACE = "\uC5BC\uAD74",
    EYES = "\uB208",
    HAIR = "\uD5E4\uC5B4",
    MOUTH = "\uC785",
    ACCESSORY = "\uC561\uC138\uC11C\uB9AC"
}
export declare enum AvatarTypeEng {
    FACE = "face",
    HAIR = "hair",
    EYES = "eyes",
    MOUTH = "mouth",
    CLOTHES = "clothes",
    ACCESSORY = "accessory",
    BACKGROUND = "background"
}
export interface ICustomSectionItem {
    id?: number;
    section_type: SectionType;
    design_type: DesignType;
    is_visible: boolean;
    title?: string;
    description?: string;
    image_url?: string;
    video_url?: string;
    order: number;
    created_at?: string;
    updated_at?: string;
    feeds?: IFeedItem[];
    feedIds?: number[];
    challenges?: IClassItem[];
    challengeIds?: number[];
    images?: {
        banner: IImageType[];
    };
    banner?: File[] | null;
    links?: any;
}
export interface IUpdateCustomSectionItem {
    id?: number;
    section_type: SectionType;
    design_type: DesignType;
    is_visible: boolean;
    title?: string;
    description?: string;
    image_url?: string;
    video_url?: string;
    order: number;
    feeds?: IFeedItem[];
    feedIds?: number[];
    challenges?: IClassItem[];
    challengeIds?: number[];
    images?: {
        banner: IImageType[];
    };
    banner?: File[] | null;
    links?: any;
}
export interface IWelcomePopupInfo {
    id: number;
    title: string;
    description: string;
    image_url?: string;
    link_url?: string;
    priority: number;
    begin_at: string;
    end_at: string;
    button_text: string;
}
export declare enum PayMethod {
    CARD = "CARD",// 신용카드
    BANK = "BANK",// 계좌이체
    VBANK = "VBANK",// 가상계좌
    CELLPHONE = "CELLPHONE",// 휴대폰결제
    NAVER = "NAVER",// 네이버페이
    KAKAO = "KAKAO",// 카카오페이
    PAYCO = "PAYCO",// 페이코페이
    LPAY = "LPAY",// 엘페이
    PINPAY = "PINPAY",// 핀페이
    SAMSUNGPAY = "SAMSUNGPAY",// 삼성페이
    TOSS = "TOSS",// 토스
    LINEPAY = "LINEPAY",// 라인페이
    TMONEYPAY = "TMONEYPAY"
}
export interface IBoardCreate {
    is_public?: boolean;
    title?: string;
    subtitle?: string;
    description?: string;
    typeName?: string;
    created_at?: string;
    images?: any;
}
export interface IBoardItem {
    is_public: boolean;
    id: number;
    title: string;
    subtitle: string | null;
    description: string;
    created_at: string;
    images?: any;
}
export interface IBoardType {
    id: number;
    type_name: string;
    url: string;
    is_connected?: boolean;
    image?: any;
}
export declare enum CERTIFICATE_DESIGN_TYPE {
    TEMPLATE = "template",
    BACKGROUND = "background",
    ICON = "icon",
    TEXT = "text",
    IMAGE = "image",
    PROPS = "props",
    RIBBON = "ribbon",
    BADGE = "badge"
}
export interface ElementStyle {
    id: string;
    controlType: "text" | "image" | "svg";
    componentName?: string;
    designType: CERTIFICATE_DESIGN_TYPE;
    order?: number;
    text?: string;
    src?: string;
    type?: string;
    bindingKey?: string;
    fontSize?: number;
    fontWeight?: string;
    textAlign?: "left" | "center" | "right";
    verticalAlign?: "top" | "middle" | "bottom";
    fontFamily?: string;
    fontStyle?: string;
    textDecoration?: string;
    background?: string;
    color?: string;
    width: number;
    height: number;
    x: number;
    y: number;
}
export interface IAchievementDesignItem {
    id: number;
    name: string;
    main_color: string;
    sub_color: string;
    layout_json: ElementStyle[];
    template_type: string;
    image: IImageType;
    extra_color_1: string;
    extra_color_2: string;
}
export interface ISvgProps {
    mainColor?: string;
    subColor?: string;
    extraColor?: string;
    extraColor1?: string;
    extraColor2?: string;
}
