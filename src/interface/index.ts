export interface IImageType {
  imageId: number;
  path: string;
  type: string;
  url: string;
  order?: number;
}

export interface IExtendedImageType extends IImageType {
  id: number; // 추가된 속성
}

export interface IKollegeItem {
  name?: string;
  images?: {
    club_cover: IImageType[];
    club_logo: IImageType[];
    club_symbol: IImageType[];
    path?: string;
  };
  [key: string]: any;
}

export interface ITagItem {
  tagKey: string;
  tagName: string;
  order: number;
  is_visible: boolean;
  is_removable: boolean;
  pinnedTagKey: string | null | undefined;
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
  type: "운영기관" | "민간기관" | "공공기관" | "커뮤니티";
  name: string;
  id: number;
  images: any; // 현재 구조가 두 가지로 나뉘어져 있어서 일단 any로 처리 (추후 수정 필요)
  // images: IImageType[][];
  contact_person_name: string;
  contact_email: string;
  phone_number: string;
  website_url: string;
}

export enum ACHIEVEMENT_IMAGES {
  ACHIEVEMENT_FORM = "achievement_form",
  BADGE_IMAGE = "badge_image",
  // AVATAR_IMAGE = "avatar_image",
}

// 증명서 디자인
export enum CERTIFICATE_DESIGN_TYPE {
  TEMPLATE = "template",
  BACKGROUND = "background",
  ICON = "icon",
  TEXT = "text",
  IMAGE = "image",
  PROPS = "props",
  RIBBON = "ribbon",
  BADGE = "badge",
}

export interface ElementStyle {
  id: string;
  controlType: "text" | "image" | "svg" | "line";
  designType: CERTIFICATE_DESIGN_TYPE;
  order?: number; // 추가
  text?: string;
  src?: string;
  type?: string;
  bindingKey?: string;
  fontSize?: number;
  fontWeight?: string;
  textAlign?: "left" | "center" | "right";
  verticalAlign?: "top" | "middle" | "bottom"; // 추가
  fontFamily?: string;
  fontStyle?: string;
  textDecoration?: string;
  background?: string;
  color?: string;
  width: number;
  height: number;
  x: number;
  y: number;
  //svg
  componentName?: string;
  mainColor?: string;
  subColor?: string;
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
  image: IImageType;
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
  user: IUserItem;
  kollegeInfo: IKollegeItem;
  achievementInfo: IAchievementItem;
}

export interface CertificateOptions {
  type?: "badge" | "certificate";
  size?: number;
  noSpace?: boolean;
  returnType?: "file" | "base64";
}
