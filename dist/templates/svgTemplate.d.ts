export interface templateType {
    id: string;
    Component: (props: any) => string | HTMLElement;
    colors?: any;
}
export declare const backgroundTemplates: templateType[];
export declare const badgeTemplates: templateType[];
export declare const ribbonTemplates: templateType[];
export declare const IconTemplates: templateType[];
