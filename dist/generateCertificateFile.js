"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCertificateFile = generateCertificateFile;
const puppeteer_1 = __importDefault(require("puppeteer"));
const renderCertificate_1 = require("./renderCertificate");
function generateCertificateFile(_a) {
    return __awaiter(this, arguments, void 0, function* ({ user, kollegeInfo, achievementInfo, elements, format, qrCodeData }) {
        try {
            // QR 코드 요소 추가
            if (qrCodeData) {
                elements.push({
                    controlType: "image",
                    bindingKey: "qr_code",
                    src: qrCodeData,
                    x: 50,
                    y: 50,
                    width: 150,
                    height: 150,
                    order: elements.length + 1
                });
            }
            const html = (0, renderCertificate_1.renderCertificate)({
                user,
                kollegeInfo,
                achievementInfo,
            });
            const browser = yield puppeteer_1.default.launch({
                headless: true,
                args: ["--no-sandbox", "--disable-setuid-sandbox"],
            });
            const page = yield browser.newPage();
            yield page.setViewport({ width: 1200, height: 800 });
            yield page.setContent(String(html));
            let buffer;
            if (format === "pdf") {
                const pdfBuffer = yield page.pdf({
                    format: "A4",
                    printBackground: true,
                    margin: { top: "0", right: "0", bottom: "0", left: "0" },
                });
                buffer = Buffer.from(pdfBuffer);
            }
            else {
                const pngBuffer = yield page.screenshot({
                    type: "png",
                    fullPage: true,
                    omitBackground: false,
                });
                buffer = Buffer.from(pngBuffer);
            }
            yield browser.close();
            return buffer;
        }
        catch (error) {
            console.error("❌ [generateCertificateFile] 에러:", error);
            throw new Error("인증서 파일 생성 중 오류가 발생했습니다.");
        }
    });
}
