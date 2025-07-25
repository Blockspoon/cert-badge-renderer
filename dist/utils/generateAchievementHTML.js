var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CERTIFICATE_DESIGN_TYPE, } from "../interface/index.js";
import { getBindingValue } from "./getBindingValue.js";
import QRCode from "qrcode";
import { badgeTemplates, iconTemplates, ribbonTemplates, } from "../templates/svgTemplate.js";
import Certificates from "../templates/certificates/index.js";
import { portraitComponents } from "../constants/componentsDirection.js";
export function generateAchievementHTML(achievementInfo_1) {
    return __awaiter(this, arguments, void 0, function* (achievementInfo, options = {}) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const { type = "certificate", size = 600, noSpace = false } = options;
        let achievementForm;
        if (achievementInfo.achievementForm) {
            achievementForm = achievementInfo.achievementForm;
        }
        else {
            achievementForm = achievementInfo;
        }
        console.log(achievementForm);
        // type에 따라 적절한 layout_json 선택
        const elements = type === "badge"
            ? (_a = achievementForm === null || achievementForm === void 0 ? void 0 : achievementForm.achievementBadgeDesign) === null || _a === void 0 ? void 0 : _a.layout_json
            : (_b = achievementForm === null || achievementForm === void 0 ? void 0 : achievementForm.achievementCertificateDesign) === null || _b === void 0 ? void 0 : _b.layout_json;
        if (!elements || !Array.isArray(elements) || elements.length === 0) {
            console.error("❌ [generateAchievementHTML] layout_json이 비어 있음:", elements);
            return `<div style="position: relative; width: 100%; height: 100%;"></div>`;
        }
        const sortedElements = elements.sort((a, b) => (a.order || 0) - (b.order || 0));
        function isHorizontal(name) {
            if (!name)
                return false;
            return !portraitComponents.includes(name);
        }
        const templateComponentName = (_c = achievementForm === null || achievementForm === void 0 ? void 0 : achievementForm.achievementCertificateDesign) === null || _c === void 0 ? void 0 : _c.template_type;
        const height = type == "badge" ? 600 : isHorizontal(templateComponentName) ? 810 : 1152;
        const width = type == "badge" ? 600 : isHorizontal(templateComponentName) ? 1152 : 810;
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
          justify-content: center;
        ">
        <div
          style="
            width: ${isHorizontal(templateComponentName)
            ? size
            : size * (width / height)}px;
            height: ${isHorizontal(templateComponentName)
            ? size * (height / width)
            : size}px;
            aspect-ratio: ${width / height};
            ${noSpace ? "position: absolute; top: 0; left: 0;" : ""}
          "
        >
        <div style="
        position: relative;
        width: ${width}px;
        height: ${height}px;
        overflow: hidden;
        transform: scale(${isHorizontal(templateComponentName) ? size / width : size / height});
        transform-origin: top left;
        ">
        `;
        if (type == "certificate") {
            html += Certificates[(_d = achievementForm === null || achievementForm === void 0 ? void 0 : achievementForm.achievementCertificateDesign) === null || _d === void 0 ? void 0 : _d.template_type]({
                mainColor: ((_e = achievementForm === null || achievementForm === void 0 ? void 0 : achievementForm.achievementCertificateDesign) === null || _e === void 0 ? void 0 : _e.main_color) || "#000000",
                subColor: ((_f = achievementForm === null || achievementForm === void 0 ? void 0 : achievementForm.achievementCertificateDesign) === null || _f === void 0 ? void 0 : _f.sub_color) || "#000000",
                extraColor1: ((_g = achievementForm === null || achievementForm === void 0 ? void 0 : achievementForm.achievementCertificateDesign) === null || _g === void 0 ? void 0 : _g.extra_color_1) ||
                    "#000000",
                extraColor2: ((_h = achievementForm === null || achievementForm === void 0 ? void 0 : achievementForm.achievementCertificateDesign) === null || _h === void 0 ? void 0 : _h.extra_color_2) ||
                    "#000000",
            });
        }
        for (const element of sortedElements) {
            if (element.bindingKey === "requirements")
                continue;
            let bindingValue = null;
            if (element.designType === CERTIFICATE_DESIGN_TYPE.PROPS) {
                bindingValue = getBindingValue(element.type, element.bindingKey, achievementInfo);
                if (element.controlType === "text") {
                    element.text = bindingValue;
                }
                if (element.controlType === "image") {
                    element.src = bindingValue;
                }
            }
            if (bindingValue === null &&
                element.designType === CERTIFICATE_DESIGN_TYPE.PROPS)
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
      padding: 0;
      display: flex;
      align-items: start;
      justify-content: ${element.textAlign === "center"
                ? "center"
                : element.textAlign === "left"
                    ? "flex-start"
                    : "flex-end"};
      padding-left: "0";
      padding-right: "0";
      word-break: break-word;
      white-space: pre-wrap;
    `;
            if (element.controlType === "svg") {
                const templates = element.designType === "badge"
                    ? badgeTemplates
                    : element.designType === "icon"
                        ? iconTemplates
                        : ribbonTemplates;
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
                        mainColor: element.mainColor,
                        subColor: element.subColor,
                        extraColor1: element.extraColor1 || "#000000",
                        extraColor2: element.extraColor2 || "#000000",
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
                    const badgeElements = (_j = achievementForm === null || achievementForm === void 0 ? void 0 : achievementForm.achievementBadgeDesign) === null || _j === void 0 ? void 0 : _j.layout_json;
                    html += `<div style="
          width: 600px;
          height: 600px;
          position: relative;
          transform: scale(${element.width / 600});
          transform-origin: top left;
        ">
          ${badgeElements
                        ? yield generateAchievementHTML(achievementInfo, {
                            type: "badge",
                            noSpace: true,
                        })
                        : ""}
        </div>`;
                }
                else if (element.bindingKey === "qr_code" && element.src) {
                    // QR 코드
                    try {
                        const qrCodeSvg = yield QRCode.toString(element.src, {
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
                    // 이미지를 base64로 변환
                    // const base64Image = await convertImageToBase64(element.src);
                    html += `<img
          src="${element.src}"
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
