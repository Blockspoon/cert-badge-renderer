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
const chromium_1 = __importDefault(require("@sparticuz/chromium")); // AWS Lambda 지원
const generateCertificateHTML_1 = require("./generateCertificateHTML");
const componentsDirection_1 = require("../constants/componentsDirection");
function isHorizontal(name) {
    if (!name)
        return false;
    return !componentsDirection_1.portraitComponents.includes(name);
}
function generateCertificateFile(jsonData_1, templateComponentName_1) {
    return __awaiter(this, arguments, void 0, function* (jsonData, templateComponentName, format = "pdf") {
        const isLambda = !!process.env.AWS_EXECUTION_ENV;
        const executablePath = isLambda
            ? yield chromium_1.default.executablePath()
            : process.platform === "darwin"
                ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
                : process.platform === "win32"
                    ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
                    : "/usr/bin/google-chrome-stable";
        const browser = yield puppeteer_1.default.launch({
            args: isLambda ? chromium_1.default.args : [],
            executablePath: executablePath,
            headless: isLambda ? chromium_1.default.headless : true,
            ignoreDefaultArgs: ["--disable-extensions"],
        });
        const page = yield browser.newPage();
        let width, height, paperFormat, landscape, fileName, contentType, scale;
        if (templateComponentName.includes("NewBadgeType")) {
            width = 600;
            height = 600;
            fileName = "badge.png";
            contentType = "image/png";
            scale = 1;
        }
        else {
            width = isHorizontal(templateComponentName) ? 1152 : 810;
            height = isHorizontal(templateComponentName) ? 810 : 1152;
            paperFormat = "A4";
            landscape = isHorizontal(templateComponentName);
            fileName = isHorizontal(templateComponentName) ? "certificate_landscape.pdf" : "certificate_portrait.pdf";
            contentType = "application/pdf";
            scale = 1.2;
        }
        const { htmlContent } = (0, generateCertificateHTML_1.generateCertificateHTML)(jsonData, templateComponentName);
        yield page.setContent(htmlContent, { waitUntil: "networkidle0" });
        // ✅ 대체 코드: 폰트 로딩 시간을 확보하기 위해 1초 대기
        yield new Promise((resolve) => setTimeout(resolve, 1000));
        let responseBuffer;
        if (format === "pdf") {
            responseBuffer = yield page.pdf({
                format: paperFormat,
                landscape: landscape,
                printBackground: true,
                pageRanges: "1",
            });
        }
        else if (format === "png") {
            responseBuffer = yield page.screenshot({
                type: "png",
                clip: { x: 0, y: 0, width: width, height: height },
                omitBackground: true,
            });
        }
        else {
            throw new Error("지원되지 않는 파일 형식");
        }
        yield browser.close();
        return { responseBuffer, contentType, fileName };
    });
}
