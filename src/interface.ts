export interface ElementStyle {
  id: string;
  order?: number;
  controlType: "text" | "image" | "svg";
  designType: typeof CERTIFICATE_DESIGN_TYPE[keyof typeof CERTIFICATE_DESIGN_TYPE] | "badge" | "ribbon";
  type?: string;
  bindingKey?: string;
  text?: string;
  src?: string;
  fontSize?: number;
  fontWeight?: string;
  fontStyle?: string;
  textDecoration?: string;
  textAlign?: string;
  fontFamily?: string;
  color?: string;
  background?: string;
  width: number;
  height: number;
  x: number;
  y: number;
  componentName?: string;
  mainColor?: string;
  subColor?: string;
}

export const CERTIFICATE_DESIGN_TYPE = {
  TEXT: "text",
  PROPS: "props",
  BADGE: "badge",
  RIBBON: "ribbon",
} as const; 