import {
  IAchievementItem,
  IKollegeItem,
  IUserItem,
  ElementStyle,
  CERTIFICATE_DESIGN_TYPE,
  CertificateData,
  CertificateOptions,
} from "./interface";
import { getBindingValue } from "./utils/getBindingValue";
import QRCode from "qrcode";
import {
  badgeTemplates,
  ribbonTemplates,
  backgroundTemplates,
} from "./templates/svgTemplate";

const DEFAULT_IMAGE_URL =
  "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/";

export async function renderCertificate(
  data: CertificateData,
  options: CertificateOptions = {}
): Promise<string> {
  const { type = "certificate", size = 600, noSpace = false } = options;

  // type에 따라 적절한 layout_json 선택
  const elements =
    type === "badge"
      ? (data.achievementInfo?.achievementForm?.achievementBadgeDesign
          ?.layout_json as ElementStyle[])
      : (data.achievementInfo?.achievementForm?.achievementCertificateDesign
          ?.layout_json as ElementStyle[]);

  if (!elements || !Array.isArray(elements) || elements.length === 0) {
    console.error("❌ [renderCertificate] elements가 비어 있음:", elements);
    return `<div style="position: relative; width: 100%; height: 100%;"></div>`;
  }

  const sortedElements = elements.sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );

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

  for (const element of sortedElements) {
    if (element.bindingKey === "requirements") continue;

    let bindingValue: any = null;
    if (element.designType === CERTIFICATE_DESIGN_TYPE.PROPS) {
      bindingValue = getBindingValue(element.type, element.bindingKey, data);

      if (element.controlType === "text") {
        element.text = bindingValue;
      }
      if (element.controlType === "image") {
        element.src = bindingValue;
      }
    }

    if (
      bindingValue === null &&
      element.designType === CERTIFICATE_DESIGN_TYPE.PROPS
    )
      continue;

    const commonStyles = `
      position: absolute;
      top: ${element.y}px;
      left: ${element.x}px;
      width: ${element.bindingKey === "badge" ? "600px" : element.width + "px"};
      height: ${
        element.bindingKey === "badge" ? "600px" : element.height + "px"
      };
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
      justify-content: ${
        element.textAlign === "center"
          ? "center"
          : element.textAlign === "left"
          ? "flex-start"
          : "flex-end"
      };
      padding-left: ${element.textAlign === "left" ? "4px" : "0"};
      padding-right: ${element.textAlign === "right" ? "4px" : "0"};
      word-break: break-word;
      white-space: pre-wrap;
    `;

    if (element.controlType === "svg") {
      const templates =
        element.designType === "background"
          ? backgroundTemplates
          : element.designType === "badge"
          ? badgeTemplates
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
          mainColor: element.mainColor || template.colors.mainColor,
          subColor: element.subColor || template.colors.subColor,
        });

        if (typeof svgString === "string") {
          // live-server 스크립트 제거
          const cleanSvg = svgString.replace(
            /<!-- Code injected by live-server -->[\s\S]*?<\/script>/,
            ""
          );
          html += cleanSvg;
        } else if (svgString instanceof Element) {
          html += svgString.outerHTML;
        }
        html += `</div>`;
      } else {
        console.error(
          `❌ SVG 컴포넌트를 찾을 수 없음: ${element.componentName}`
        );
      }
    } else if (element.controlType === "text") {
      html += `<div style="${commonStyles}">${element.text || ""}</div>`;
    } else if (element.controlType === "image") {
      html += `<div style="${commonStyles}">`;

      if (element.bindingKey === "badge" && type !== "badge") {
        // 뱃지 (certificate 타입일 때만 뱃지를 중첩해서 렌더링)
        const badgeElements = data.achievementInfo?.achievementForm
          ?.achievementBadgeDesign?.layout_json as ElementStyle[];
        html += `<div style="
          width: 600px;
          height: 600px;
          position: relative;
          transform: scale(${element.width / 600});
          transform-origin: top left;
        ">
          ${
            badgeElements
              ? await renderCertificate(data, { type: "badge", noSpace: true })
              : ""
          }
        </div>`;
      } else if (element.bindingKey === "qr_code" && element.src) {
        // QR 코드
        try {
          const qrCodeSvg = await QRCode.toString(element.src, {
            type: "svg",
            width: element.width,
            height: element.height,
            errorCorrectionLevel: "H",
          });
          html += qrCodeSvg;
        } catch (error) {
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
      } else if (element.src) {
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
  }

  html += `
        </div>
        </div>
      </body>
    </html>
  `;

  return html;
}
