import { CertificateData, CertificateOptions } from "../interface";
export declare function generateCertificateFile(data: CertificateData, options?: CertificateOptions): Promise<{
    base64: string;
    contentType: string;
    buffer?: undefined;
    fileName?: undefined;
} | {
    buffer: Uint8Array<ArrayBufferLike>;
    contentType: string;
    fileName: string;
    base64?: undefined;
}>;
