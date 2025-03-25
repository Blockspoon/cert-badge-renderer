import puppeteer, { PaperFormat } from "puppeteer";
import chromium from "@sparticuz/chromium"; // AWS Lambda 지원
import { generateCertificateHTML } from "./generateCertificateHTML";
import { portraitComponents } from "../constants/componentsDirection";

function isHorizontal(name?: string) {
  if (!name) return false;
  return !portraitComponents.includes(name);
}

export async function generateCertificateFile(
  jsonData: any[], 
  templateComponentName: string, 
  format: "pdf" | "png" = "pdf"
) {
  const isLambda = !!process.env.AWS_EXECUTION_ENV;
  
  const executablePath = isLambda
    ? await chromium.executablePath()
    : process.platform === "darwin"
    ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    : process.platform === "win32"
    ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    : "/usr/bin/google-chrome-stable";

  const browser = await puppeteer.launch({
    args: isLambda ? chromium.args : [],
    executablePath: executablePath,
    headless: isLambda ? chromium.headless : true,
    ignoreDefaultArgs: ["--disable-extensions"],
  });

  const page = await browser.newPage();

  let width, height, paperFormat, landscape, fileName, contentType, scale;

  if (templateComponentName.includes("NewBadgeType")) {
    width = 600;
    height = 600;
    fileName = "badge.png";
    contentType = "image/png";
    scale = 1;
  } else {
    width = isHorizontal(templateComponentName) ? 1152 : 810;
    height = isHorizontal(templateComponentName) ? 810 : 1152;
    paperFormat = "A4";
    landscape = isHorizontal(templateComponentName);
    fileName = isHorizontal(templateComponentName) ? "certificate_landscape.pdf" : "certificate_portrait.pdf";
    contentType = "application/pdf";
    scale = 1.2;
  }

  const { htmlContent } = generateCertificateHTML(jsonData, templateComponentName);

  await page.setContent(htmlContent, { waitUntil: "networkidle0" });

  // ✅ 대체 코드: 폰트 로딩 시간을 확보하기 위해 1초 대기
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let responseBuffer;

  if (format === "pdf") {
    responseBuffer = await page.pdf({
      format: paperFormat as PaperFormat,
      landscape: landscape,
      printBackground: true,
      pageRanges: "1",
    });
  } else if (format === "png") {
    responseBuffer = await page.screenshot({
      type: "png",
      clip: { x: 0, y: 0, width: width, height: height },
      omitBackground: true,
    });
  } else {
    throw new Error("지원되지 않는 파일 형식");
  }

  await browser.close();

  return { responseBuffer, contentType, fileName };
}