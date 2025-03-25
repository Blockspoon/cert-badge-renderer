import puppeteer from "puppeteer";
import { IAchievementItem, IKollegeItem, IUserItem } from "./interface";
import { renderCertificate } from "./renderCertificate";

interface GenerateCertificateFileParams {
  user: IUserItem;
  kollegeInfo: IKollegeItem;
  achievementInfo: IAchievementItem;
  elements: any[];
  format: "pdf" | "png";
  qrCodeData?: string;
}

export async function generateCertificateFile({
  user,
  kollegeInfo,
  achievementInfo,
  elements,
  format,
  qrCodeData
}: GenerateCertificateFileParams): Promise<Buffer> {
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

    const html = renderCertificate({
      user,
      kollegeInfo,
      achievementInfo,
    });

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    await page.setContent(String(html));

    let buffer: Buffer;
    if (format === "pdf") {
      const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: { top: "0", right: "0", bottom: "0", left: "0" },
      });
      buffer = Buffer.from(pdfBuffer);
    } else {
      const pngBuffer = await page.screenshot({
        type: "png",
        fullPage: true,
        omitBackground: false,
      });
      buffer = Buffer.from(pngBuffer);
    }

    await browser.close();
    return buffer;
  } catch (error) {
    console.error("❌ [generateCertificateFile] 에러:", error);
    throw new Error("인증서 파일 생성 중 오류가 발생했습니다.");
  }
} 