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

export enum KOLLEGE_TYPE {
  COMMUNITY = "community",
  COMPANY = "company",
  SCHOOL = "school",
  AUTHORITY = "authority",
}

export enum KOLLEGE_JOIN_STATUS {
  AUTO_APPROVAL = "auto_approval",
  MANUAL_APPROVAL = "manual_approval",
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
    club_cover: IImageType[];
    club_logo: IImageType[];
    club_symbol: IImageType[];
    path?: string;
  };
}

export interface IUserItem {
  id: number;
  // nickname: string;
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

export interface IAchievementFormItem {
  achievementCertificateDesign?: IAchievementDesignItem;
  achievementBadgeDesign?: IAchievementDesignItem;
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
  cid?: any; // 추가된 속성
  course_begin_at?: string;
  course_end_at?: string;
  created_at: string;
  expiration_date?: string;
  id?: number;
  is_received?: boolean; // 추가된 속성
  level?: number;
  nft_token?: any; // 추가된 속성
  status?: string;
  user: IUserItem;
  customAttributes?: {
    attribute_tag: string;
    attribute_value: string;
  }[];
}

export enum ACHIEVEMENT_IMAGES {
  ACHIEVEMENT_FORM = "achievement_form",
  BADGE_IMAGE = "badge_image",
  // AVATAR_IMAGE = "avatar_image",
}

export enum CERTIFICATE_DESIGN_TYPE {
  TEMPLATE = "template",
  BACKGROUND = "background",
  ICON = "icon",
  TEXT = "text",
  IMAGE = "image",
  PROPS = "props",
}

export interface ElementStyle {
  id: string;
  controlType: "text" | "image";
  designType: CERTIFICATE_DESIGN_TYPE;
  order?: number; // 추가
  text?: string;
  src?: string;
  type?: string;
  bindingKey?: string;
  fontSize?: number;
  fontWeight?: string;
  textAlign?: "left" | "center" | "right";
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
