export interface IKollegeItem {
    name?: string;
    images?: any;
    [key: string]: any;
}
export interface IUserItem {
    name: string;
    [key: string]: any;
}
export interface IAchievementFormItem {
    achievementCertificateDesign?: IAchievementDesignItem;
    achievementBadgeDesign?: IAchievementDesignItem;
    clubInstitutions?: IOrganizationItem[];
    course_begin_at?: string;
    course_end_at?: string;
    description?: string;
    id?: number;
    name?: string;
    tags?: string[];
    representativeInstitution?: any;
    representativeInstitutionId?: number;
    [key: string]: any;
}
export interface IAchievementItem {
    achievementForm: IAchievementFormItem;
    achievementFormId?: number;
    admin_comment?: string;
    certificate_number?: string;
    course_begin_at?: string;
    course_end_at?: string;
    created_at?: string;
    expiration_date?: string;
    id?: number;
    level?: number;
    user: IUserItem;
    customAttributes?: {
        attribute_tag: string;
        attribute_value: string;
    }[];
}
export interface IOrganizationItem {
    name?: string;
    id?: number;
    images?: any;
    [key: string]: any;
}
export declare enum ACHIEVEMENT_IMAGES {
    ACHIEVEMENT_FORM = "achievement_form",
    BADGE_IMAGE = "badge_image"
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
    controlType: "text" | "image" | "svg" | "line";
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
    componentName?: string;
    mainColor?: string;
    subColor?: string;
    extraColor1?: string;
    extraColor2?: string;
    isVertical?: boolean;
    lineWidth?: number;
}
export interface IAchievementDesignItem {
    id: number;
    name: string;
    main_color: string;
    sub_color: string;
    layout_json: ElementStyle[];
    template_type: string;
    image: any;
    extra_color_1: string;
    extra_color_2: string;
}
export interface ISvgProps {
    mainColor?: string;
    subColor?: string;
    extraColor1?: string;
    extraColor2?: string;
}
export interface CertificateData {
    user: any;
    kollegeInfo: any;
    achievementInfo: any;
}
export interface CertificateOptions {
    type?: string;
    size?: number;
    returnType?: string;
    noSpace?: boolean;
}
export interface DesignOptions {
    size?: number;
    returnType?: string;
    noSpace?: boolean;
}
