export declare function generateCertificateFile(data: {
    user: any;
    kollegeInfo: any;
    achievementInfo: any;
    type?: "badge" | "certificate";
    size?: number;
}): Promise<{
    buffer: any;
    contentType: string;
    fileName: string;
}>;
