"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDesignHTML = generateDesignHTML;
const index_js_1 = require("../interface/index.js");
const getBindingValue_js_1 = require("./getBindingValue.js");
const qrcode_1 = __importDefault(require("qrcode"));
const svgTemplate_js_1 = require("../templates/svgTemplate.js");
const index_js_2 = __importDefault(require("../templates/certificates/index.js"));
const componentsDirection_js_1 = require("../constants/componentsDirection.js");
async function generateDesignHTML(data, options = {}) {
    const { size = 600, noSpace = false } = options;
    // type에 따라 적절한 layout_json 선택
    const elements = data.layout_json;
    if (!elements || !Array.isArray(elements) || elements.length === 0) {
        console.error("❌ [generateDesignHTML] layout_json이 비어 있음:", elements);
        return `<div style="position: relative; width: 100%; height: 100%;"></div>`;
    }
    const sortedElements = elements.sort((a, b) => (a.order || 0) - (b.order || 0));
    function isHorizontal(name) {
        if (!name)
            return false;
        return !componentsDirection_js_1.portraitComponents.includes(name);
    }
    const templateComponentName = data?.template_type;
    const isBadge = data?.template_type.includes("Badge");
    const height = isBadge
        ? 600
        : isHorizontal(templateComponentName)
            ? 810
            : 1152;
    const width = isBadge
        ? 600
        : isHorizontal(templateComponentName)
            ? 1152
            : 810;
    let html = `
      <!DOCTYPE html>
      <html lang="ko">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Certificate</title>
          <style>
            /* Pretendard - Regular(400), Medium(500), SemiBold(600), Bold(700) */
            @font-face { font-family: 'Pretendard'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/Pretendard-Regular.woff2') format('woff2'); font-weight: 400; font-style: normal; }
            @font-face { font-family: 'Pretendard'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/Pretendard-Medium.woff2') format('woff2'); font-weight: 500; font-style: normal; }
            @font-face { font-family: 'Pretendard'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/Pretendard-SemiBold.woff2') format('woff2'); font-weight: 600; font-style: normal; }
            @font-face { font-family: 'Pretendard'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/Pretendard-Bold.woff2') format('woff2'); font-weight: 700; font-style: normal; }
            /* BR Firma - Regular(400), Medium(500), SemiBold(600), Bold(700) */
            @font-face { font-family: 'BR Firma'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/BR-Firma-Regular.woff2') format('woff2'); font-weight: 400; font-style: normal; }
            @font-face { font-family: 'BR Firma'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/BR-Firma-Medium.woff2') format('woff2'); font-weight: 500; font-style: normal; }
            @font-face { font-family: 'BR Firma'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/BR-Firma-SemiBold.woff2') format('woff2'); font-weight: 600; font-style: normal; }
            @font-face { font-family: 'BR Firma'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/BR-Firma-Bold.woff2') format('woff2'); font-weight: 700; font-style: normal; }
            /* MaruBuri - Regular(400), SemiBold(600), Bold(700) */
            @font-face { font-family: 'MaruBuri'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/MaruBuri-Regular.woff2') format('woff2'); font-weight: 400; font-style: normal; }
            @font-face { font-family: 'MaruBuri'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/MaruBuri-SemiBold.woff2') format('woff2'); font-weight: 600; font-style: normal; }
            @font-face { font-family: 'MaruBuri'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/MaruBuri-Bold.woff2') format('woff2'); font-weight: 700; font-style: normal; }
            /* NanumSquareRound - Regular(400), Bold(700) */
            @font-face { font-family: 'NanumSquareRound'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/NanumSquareRoundR.woff2') format('woff2'); font-weight: 400; font-style: normal; }
            @font-face { font-family: 'NanumSquareRound'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/NanumSquareRoundB.woff2') format('woff2'); font-weight: 700; font-style: normal; }
            /* BookkMyungjo - Regular(400), Bold(700) */
            @font-face { font-family: 'BookkMyungjo'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/BookkMyungjo-Lt.woff2') format('woff2'); font-weight: 400; font-style: normal; }
            @font-face { font-family: 'BookkMyungjo'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/BookkMyungjo-Bd.woff2') format('woff2'); font-weight: 700; font-style: normal; }
            /* BookkGothic - Regular(400), Bold(700) */
            @font-face { font-family: 'BookkGothic'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/BookkGothic-Lt.woff2') format('woff2'); font-weight: 400; font-style: normal; }
            @font-face { font-family: 'BookkGothic'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/BookkGothic-Bd.woff2') format('woff2'); font-weight: 700; font-style: normal; }
            /* Righteous - Regular(400) */
            @font-face { font-family: 'Righteous'; src: url('https://ifwuxxjjypxzrvxilwqy.supabase.co/storage/v1/object/public/blockspoon_images/fonts/Righteous-Regular.woff2') format('woff2'); font-weight: 400; font-style: normal; }
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
    if (!isBadge) {
        html += index_js_2.default[data?.template_type]({
            mainColor: data?.main_color || "#000000",
            subColor: data?.sub_color || "#000000",
            extraColor1: data?.extra_color_1 || "#000000",
            extraColor2: data?.extra_color_2 || "#000000",
        });
    }
    for (const element of sortedElements) {
        if (element.bindingKey === "requirements")
            continue;
        let bindingValue = null;
        if (element.designType === index_js_1.CERTIFICATE_DESIGN_TYPE.PROPS) {
            bindingValue = (0, getBindingValue_js_1.getBindingValue)(element.type, element.bindingKey, data);
            if (element.controlType === "text") {
                element.text = bindingValue;
            }
            if (element.controlType === "image") {
                if (element.bindingKey === "badge") {
                    continue;
                }
                element.src = bindingValue;
            }
        }
        if (bindingValue === null &&
            element.designType === index_js_1.CERTIFICATE_DESIGN_TYPE.PROPS)
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
        word-break: ${isBadge ? "break-word" : "normal"};
        white-space: ${isBadge ? "pre-wrap" : "normal"};
        opacity: ${element.opacity || 1};
      `;
        if (element.controlType === "svg") {
            const templates = element.designType === "badge"
                ? svgTemplate_js_1.badgeTemplates
                : element.designType === "icon"
                    ? svgTemplate_js_1.iconTemplates
                    : svgTemplate_js_1.ribbonTemplates;
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
            if (element.bindingKey === "qr_code" && element.src) {
                // QR 코드
                try {
                    const qrCodeSvg = await qrcode_1.default.toString(element.src, {
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
}
