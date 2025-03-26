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
const renderCertificate_1 = require("../renderCertificate");
function generateCertificateFile(data_1) {
    return __awaiter(this, arguments, void 0, function* (data, options = {}) {
        const { returnType = "file", type = "certificate", size = 600 } = options;
        const browser = yield puppeteer_1.default.launch({
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu",
                "--disable-software-rasterizer",
            ],
        });
        const page = yield browser.newPage();
        yield page.setRequestInterception(true);
        page.on("request", (request) => {
            if (request.resourceType() === "image") {
                request.continue();
            }
            else {
                request.continue();
            }
        });
        const htmlContent = yield (0, renderCertificate_1.renderCertificate)(data, { type, size });
        yield page.setContent(htmlContent, {
            waitUntil: "domcontentloaded",
        });
        yield new Promise((resolve) => setTimeout(resolve, 500));
        yield page.setViewport({
            width: size,
            height: size,
        });
        const buffer = yield page.screenshot({
            type: "png",
            clip: {
                x: 0,
                y: 0,
                width: size,
                height: size,
            },
            omitBackground: true,
            encoding: "binary",
        });
        yield browser.close();
        if (returnType === "base64") {
            const base64 = Buffer.from(buffer).toString("base64");
            return {
                base64: `data:image/png;base64,${base64}`,
                contentType: "image/png",
            };
        }
        return {
            buffer,
            contentType: "image/png",
            fileName: "certificate.png",
        };
    });
}
