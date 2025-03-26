import puppeteer from "puppeteer";
import { renderCertificate } from "../renderCertificate";

export async function generateCertificateFile(
  data: {
    user: any;
    kollegeInfo: any;
    achievementInfo: any;
    type?: "badge" | "certificate";
    size?: number;
  },
  returnType: "file" | "base64" = "file"
) {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--disable-software-rasterizer",
    ],
  });

  const page = await browser.newPage();
  const size = data.size || 600;

  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (request.resourceType() === "image") {
      request.continue();
    } else {
      request.continue();
    }
  });

  const htmlContent = await renderCertificate(data);

  await page.setContent(htmlContent, {
    waitUntil: "domcontentloaded",
  });

  await new Promise((resolve) => setTimeout(resolve, 500));

  await page.setViewport({
    width: size,
    height: size,
  });

  const buffer = await page.screenshot({
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

  await browser.close();

  if (returnType === "base64") {
    const base64 = buffer.toString("base64");
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
}
