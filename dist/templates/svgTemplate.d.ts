export interface templateType {
    id: string;
    Component: (props: any) => string | HTMLElement;
    colors: {
        mainColor: string;
        subColor?: string;
        extraColor1?: string;
        extraColor2?: string;
    };
}
export declare const badgeTemplates: templateType[];
export declare const ribbonTemplates: templateType[];
export declare const IconTemplates: templateType[];
