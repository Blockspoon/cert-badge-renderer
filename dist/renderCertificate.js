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
exports.renderCertificate = renderCertificate;
const interface_1 = require("./interface");
const getBindingValue_1 = require("./utils/getBindingValue");
const qrcode_1 = __importDefault(require("qrcode"));
const svgTemplate_1 = require("./templates/svgTemplate");
const certificates_1 = __importDefault(require("./templates/certificates"));
const DEFAULT_IMAGE_URL = "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/";
function renderCertificate(data_1) {
    return __awaiter(this, arguments, void 0, function* (data, options = {}) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        const { type = "certificate", size = 600, noSpace = false } = options;
        // type에 따라 적절한 layout_json 선택
        const elements = type === "badge"
            ? (_c = (_b = (_a = data.achievementInfo) === null || _a === void 0 ? void 0 : _a.achievementForm) === null || _b === void 0 ? void 0 : _b.achievementBadgeDesign) === null || _c === void 0 ? void 0 : _c.layout_json
            : (_f = (_e = (_d = data.achievementInfo) === null || _d === void 0 ? void 0 : _d.achievementForm) === null || _e === void 0 ? void 0 : _e.achievementCertificateDesign) === null || _f === void 0 ? void 0 : _f.layout_json;
        if (!elements || !Array.isArray(elements) || elements.length === 0) {
            console.error("❌ [renderCertificate] elements가 비어 있음:", elements);
            return `<div style="position: relative; width: 100%; height: 100%;"></div>`;
        }
        const sortedElements = elements.sort((a, b) => (a.order || 0) - (b.order || 0));
        const height = type == "badge" ? 600 : 810;
        const width = type == "badge" ? 600 : 1152;
        let html = `
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Certificate</title>
        <style>
          @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        </style>
      </head>
      <body style="
          width: ${size}px;
          height: ${size}px;
          overflow: hidden;
          display: flex;
          align-items: center;
        ">
        <div
          style="
            height: ${(size / height) * 600}px;
            width: ${size}px;
            ${noSpace ? "position: absolute; top: 0; left: 0;" : ""}
          "
        >
        
        <div style="
        position: relative;
        width: ${width}px;
        height: ${height}px;
        overflow: hidden;
        transform: scale(${size / width});
        transform-origin: top left;
        ">
        `;
        if (type == "certificate") {
            html += certificates_1.default[(_j = (_h = (_g = data.achievementInfo) === null || _g === void 0 ? void 0 : _g.achievementForm) === null || _h === void 0 ? void 0 : _h.achievementCertificateDesign) === null || _j === void 0 ? void 0 : _j.template_type]({
                mainColor: ((_m = (_l = (_k = data.achievementInfo) === null || _k === void 0 ? void 0 : _k.achievementForm) === null || _l === void 0 ? void 0 : _l.achievementCertificateDesign) === null || _m === void 0 ? void 0 : _m.main_color) || "#000000",
                subColor: ((_q = (_p = (_o = data.achievementInfo) === null || _o === void 0 ? void 0 : _o.achievementForm) === null || _p === void 0 ? void 0 : _p.achievementCertificateDesign) === null || _q === void 0 ? void 0 : _q.sub_color) || "#000000",
                extraColor1: ((_t = (_s = (_r = data.achievementInfo) === null || _r === void 0 ? void 0 : _r.achievementForm) === null || _s === void 0 ? void 0 : _s.achievementCertificateDesign) === null || _t === void 0 ? void 0 : _t.extra_color_1) || "#000000",
                extraColor2: ((_w = (_v = (_u = data.achievementInfo) === null || _u === void 0 ? void 0 : _u.achievementForm) === null || _v === void 0 ? void 0 : _v.achievementCertificateDesign) === null || _w === void 0 ? void 0 : _w.extra_color_2) || "#000000",
            });
        }
        for (const element of sortedElements) {
            if (element.bindingKey === "requirements")
                continue;
            let bindingValue = null;
            if (element.designType === interface_1.CERTIFICATE_DESIGN_TYPE.PROPS) {
                bindingValue = (0, getBindingValue_1.getBindingValue)(element.type, element.bindingKey, data);
                if (element.controlType === "text") {
                    element.text = bindingValue;
                }
                if (element.controlType === "image") {
                    element.src = bindingValue;
                }
            }
            if (bindingValue === null &&
                element.designType === interface_1.CERTIFICATE_DESIGN_TYPE.PROPS)
                continue;
            const commonStyles = `
      position: absolute;
      top: ${element.y}px;
      left: ${element.x}px;
      width: ${element.bindingKey === "badge" ? "600px" : element.width + "px"};
      height: ${element.bindingKey === "badge" ? "600px" : element.height + "px"};
      background: transparent;
      font-size: ${element.fontSize}px;
      font-weight: ${element.fontWeight || "normal"};
      font-style: ${element.fontStyle || "normal"};
      text-decoration: ${element.textDecoration || "none"};
      text-align: ${element.textAlign || "left"};
      font-family: ${element.fontFamily || "inherit"};
      color: ${element.color || "black"};
      border: none;
      padding: ${element.controlType === "text" ? "4px" : "0"};
      display: flex;
      align-items: start;
      justify-content: ${element.textAlign === "center"
                ? "center"
                : element.textAlign === "left"
                    ? "flex-start"
                    : "flex-end"};
      padding-left: ${element.textAlign === "left" ? "4px" : "0"};
      padding-right: ${element.textAlign === "right" ? "4px" : "0"};
      word-break: break-word;
      white-space: pre-wrap;
    `;
            if (element.controlType === "svg") {
                const templates = element.designType === "badge" ? svgTemplate_1.badgeTemplates : svgTemplate_1.ribbonTemplates;
                const template = templates.find((t) => t.id === element.componentName);
                if (template) {
                    const optimizedStyles = `
          position: absolute;
          top: ${element.y}px;
          left: ${element.x}px;
          width: ${element.width}px;
          height: ${element.height}px;
          isolation: isolate;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform, contents;
          transform: translateZ(0);
          backface-visibility: hidden;
        `;
                    html += `<div style="${optimizedStyles}">`;
                    const svgString = template.Component({
                        mainColor: element.mainColor || template.colors.mainColor,
                        subColor: element.subColor || template.colors.subColor,
                    });
                    if (typeof svgString === "string") {
                        // live-server 스크립트 제거
                        const cleanSvg = svgString.replace(/<!-- Code injected by live-server -->[\s\S]*?<\/script>/, "");
                        html += cleanSvg;
                    }
                    else if (svgString instanceof Element) {
                        html += svgString.outerHTML;
                    }
                    html += `</div>`;
                }
                else {
                    console.error(`❌ SVG 컴포넌트를 찾을 수 없음: ${element.componentName}`);
                }
            }
            else if (element.controlType === "text") {
                html += `<div style="${commonStyles}">${element.text || ""}</div>`;
            }
            else if (element.controlType === "image") {
                html += `<div style="${commonStyles}">`;
                if (element.bindingKey === "badge" && type !== "badge") {
                    // 뱃지 (certificate 타입일 때만 뱃지를 중첩해서 렌더링)
                    const badgeElements = (_z = (_y = (_x = data.achievementInfo) === null || _x === void 0 ? void 0 : _x.achievementForm) === null || _y === void 0 ? void 0 : _y.achievementBadgeDesign) === null || _z === void 0 ? void 0 : _z.layout_json;
                    html += `<div style="
          width: 600px;
          height: 600px;
          position: relative;
          transform: scale(${element.width / 600});
          transform-origin: top left;
        ">
          ${badgeElements
                        ? yield renderCertificate(data, { type: "badge", noSpace: true })
                        : ""}
        </div>`;
                }
                else if (element.bindingKey === "qr_code" && element.src) {
                    // QR 코드
                    try {
                        const qrCodeSvg = yield qrcode_1.default.toString(element.src, {
                            type: "svg",
                            width: element.width,
                            height: element.height,
                            errorCorrectionLevel: "H",
                        });
                        html += qrCodeSvg;
                    }
                    catch (error) {
                        console.error("❌ QR 코드 생성 실패:", error);
                        html += `<div style="
            background-color: #f5f5f5;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          ">QR Code Error</div>`;
                    }
                }
                else if (element.src) {
                    // 이미지
                    html += `<img
          src="${DEFAULT_IMAGE_URL}${element.src}"
          alt="Uploaded"
          style="
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            align-self: center;
          "
        />`;
                }
                html += `</div>`;
            }
            if (element.controlType === "line") {
                html += `<div style="${commonStyles}">`;
                html += `<div style="
        background-color: ${element.color || "black"};
        transform: ${element.isVertical ? "none" : "rotate(0deg)"};
        width: ${element.isVertical ? `${element.lineWidth || 1}px` : "100%"};
        height: ${element.isVertical ? "100%" : `${element.lineWidth || 1}px`};
      "></div>
      </div>`;
            }
        }
        html += `
        </div>
        </div>
      </body>
    </html>
  `;
        return html;
    });
}
