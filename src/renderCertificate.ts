import {
  IAchievementItem,
  IKollegeItem,
  IUserItem,
  ElementStyle,
  CERTIFICATE_DESIGN_TYPE,
} from "./interface";
import { getBindingValue } from "./utils/getBindingValue";
import QRCode from "qrcode";
import { badgeTemplates, ribbonTemplates } from "./templates/svgTemplate";

const DEFAULT_IMAGE_URL = "https://ufcglnoegwgklehhpzlj.supabase.co/storage/v1/object/public/blockspoon_images/";

export async function renderCertificate(data: {
  user: IUserItem;
  kollegeInfo: IKollegeItem;
  achievementInfo: IAchievementItem;
  type?: "badge" | "certificate";
}): Promise<string> {
  // type에 따라 적절한 layout_json 선택
  const elements = data.type === "badge"
    ? data.achievementInfo?.achievementForm?.achievementBadgeDesign?.layout_json as ElementStyle[]
    : data.achievementInfo?.achievementForm?.achievementCertificateDesign?.layout_json as ElementStyle[];

  if (!elements || !Array.isArray(elements) || elements.length === 0) {
    console.error("❌ [renderCertificate] elements가 비어 있음:", elements);
    return `<div style="position: relative; width: 100%; height: 100%;"></div>`;
  }

  const sortedElements = elements.sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );

  let html = `<div style="position: absolute; top: 0; left: 0; z-index: 10; width: 100%; height: 100%; line-height: 1.3; overflow: hidden;">`;

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

    if (bindingValue === null && element.designType === CERTIFICATE_DESIGN_TYPE.PROPS) continue;

    const commonStyles = `
      position: absolute;
      top: ${element.y}px;
      left: ${element.x}px;
      width: ${element.bindingKey === "badge" ? "600px" : element.width + "px"};
      height: ${element.bindingKey === "badge" ? "600px" : element.height + "px"};
      background: ${element.background || ""};
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

    html += `<div style="${commonStyles}">`;

    if (element.controlType === "svg") {
      // SVG 컴포넌트 렌더링
      const templates = element.designType === "badge" ? badgeTemplates : ribbonTemplates;
      const template = templates.find(t => t.id === element.componentName);
      
      if (template) {
        const svgComponent = template.Component({
          mainColor: element.mainColor || template.colors.mainColor,
          subColor: element.subColor || template.colors.subColor
        });
        html += svgComponent.innerHTML;
      } else {
        console.error(`❌ SVG 컴포넌트를 찾을 수 없음: ${element.componentName}`);
      }
    } else if (element.controlType === "image") {
      if (element.bindingKey === "badge" && data.type !== "badge") {
        // 뱃지 (certificate 타입일 때만 뱃지를 중첩해서 렌더링)
        const badgeElements = data.achievementInfo?.achievementForm?.achievementBadgeDesign?.layout_json as ElementStyle[];
        html += `<div style="
          width: 600px;
          height: 600px;
          position: relative;
          transform: scale(${element.width / 600});
          transform-origin: top left;
        ">
          ${badgeElements ? await renderCertificate({
            user: data.user,
            kollegeInfo: data.kollegeInfo,
            achievementInfo: data.achievementInfo,
            type: "badge"
          }) : ''}
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
      } else {
        // 텍스트
        html += `<div style="
          background-color: #f5f5f5;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        ">${element.text || ''}</div>`;
      }
    } else {
      html += `<div style="width: 100%; height: 100%;">${element.text || ''}</div>`;
    }

    html += `</div>`;
  }

  html += `</div>`;
  return html;
}
