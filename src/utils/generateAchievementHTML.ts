import { renderCertificate } from "../renderCertificate";
import { portraitComponents } from "../constants/componentsDirection";

function isHorizontal(name?: string) {
  if (!name) return false;
  return !portraitComponents.includes(name);
}

export function generateAchievementHTML(jsonData: any[], templateComponentName: string) {
  const width = isHorizontal(templateComponentName) ? 1152 : 810;
  const height = isHorizontal(templateComponentName) ? 810 : 1152;

  const htmlContent = `
    <html>
      <head>
        <style>
          @font-face {
            font-family: "Pretendard";
            src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
          }
        </style>
      </head>
      <body
        style="
          width: ${width}px;
          height: ${height}px;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-origin: 0 0;
        "
      >
        <div class="container" style="
          width: ${width}px;
          height: ${height}px;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        ">
          ${renderCertificate({
            user: jsonData[0]?.user || {},
            kollegeInfo: jsonData[0]?.kollegeInfo || {},
            achievementInfo: jsonData[0]?.achievementInfo || {}
          })}
        </div>
      </body>
    </html>
  `;

  return { htmlContent };
}